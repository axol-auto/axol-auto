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

export default query;
