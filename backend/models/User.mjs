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

const createUser = (username, password, email) => {
  const sql =
    'insert into users (username, password, email) values ($1, $2, $3)';
  return query(sql, [username, password, email]);
};

const findUser = (username, email) => {
  const sql = 'select * from users where username = $1 or email = $2';
  return query(sql, [username, email]);
};

const createSession = (username, email, sessionid, expiration) => {
  if (!sessionid) return new Error('Need a session ID');
  if (typeof expiration.getMonth !== 'function') {
    return new Error('Invalid date');
  }

  const sql =
    'update users set sessionid = $3, expiration = $4 where username = $1 or email = $2';
  return query(sql, [username, email, sessionid, expiration]);
};

const getSession = sessionid => {
  const sql = 'select * from users where sessionid = $1';
  return query(sql, [sessionid]);
};

export default {
  createUser,
  findUser,
  createSession,
  getSession,
};
