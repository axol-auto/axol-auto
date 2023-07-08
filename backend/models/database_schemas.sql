create table users (
    id serial primary key,
    username varchar not null unique,
    password varchar not null,
    email varchar not null unique,
    sessionid varchar,
    session_expiration timestamp,
    role varchar default 'user'
);

create table categories (
    id serial primary key,
    name varchar not null,
    imageurl varchar
);

create table inventory (
    id serial primary key,
    name varchar not null,
    price int not null,
    category_id int,
    subcategory_id int,
    description varchar,
    quantity int default 0,
    imageurl varchar,
    foreign key (category_id) references categories (id),
    foreign key (subcategory_id) references categories (id)
);

create table carts (
    user_id int,
    item_id int,
    quantity int,
    primary key (user_id, item_id),
    foreign key (user_id) references users (id),
    foreign key (item_id) references inventory (id)
);

create table orders (
    id serial primary key,
    user_id int not null,
    price int not null,
    tracking varchar,
    created_at timestamp default now(),
    fulfilled_at timestamp
);

create table order_details (
    order_id int,
    item_id int,
    quantity int not null,
    price int not null,
    primary key (order_id, item_id),
    foreign key (order_id) references orders (id),
    foreign key (item_id) references inventory (id)
);