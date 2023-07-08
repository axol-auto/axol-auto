import query from './query';

const createUser = async (username, password, email) => {
  const sql =
    'insert into users (username, password, email) values ($1, $2, $3)';
  const result = await query(sql, [username, password, email]);
  return result.rows;
};

const findUser = async (username, email) => {
  const sql = 'select * from users where username = $1 or email = $2';
  const result = await query(sql, [username, email]);
  return result.rows;
};

const createSession = async (username, email, sessionid, expiration) => {
  if (!sessionid) return new Error('Need a session ID');
  if (typeof expiration.getMonth !== 'function') {
    return new Error('Invalid date');
  }

  const sql =
    'update users set sessionid = $3, expiration = $4 where username = $1 or email = $2';
  const result = await query(sql, [username, email, sessionid, expiration]);
  return result.rows;
};

const getSession = async sessionid => {
  const sql = 'select * from users where sessionid = $1';
  const result = await query(sql, [sessionid]);
  return result.rows;
};

export default {
  createUser,
  findUser,
  createSession,
  getSession,
};
