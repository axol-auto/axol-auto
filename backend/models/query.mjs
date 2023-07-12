import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const pool = new pg.Pool({ connectionString: process.env.PG_URI });

async function query(sql, params) {
  const client = await pool.connect();
  try {
    const results = await client.query(sql, params);
    client.release();
    return results;
  } catch (e) {
    client.release();
    return e;
  }
}

export async function transaction(queries) {
  const client = await pool.connect();
  const result = [];

  await client.query('BEGIN');

  try {
    for (const q of queries) {
      const params = result.length
        ? [...q.params, result[result.length - 1].rows[0].id]
        : q.params;
      result.push(await client.query(q.sql, params));
    }
    await client.query('COMMIT');
  } catch (e) {
    result.push(e);
    await client.query('ROLLBACK');
  } finally {
    client.release();
  }

  return result;
}

export default query;
