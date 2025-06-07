-- Active: 1743635926160@@localhost@5432@auth_portofolio

create SCHEMA users;

create table if not exists users.users (
    id serial primary key,
    username varchar(255) not null unique,
    password varchar(255) not null
);

INSERT INTO users.users (username, password)
VALUES ('p3L3ru#', 'A9!xT7@qL2$wZ8^s');

CREATE TABLE IF NOT EXISTS users.login (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users.users (id) ON DELETE CASCADE,
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP
);
