create table users (
    id serial primary key,
    username varchar not null unique,
    password varchar not null unique,
    email varchar not null,
    sessionid varchar,
    session_expiration timestamp,
    permission varchar default 'user'
);
