

CREATE TABLE users (
    id_user integer not null auto_increment,
    is_active boolean not null,
    username varchar not null,
    password varchar not null,
    name varchar not null,
);

INSERT INTO
    users (is_active, username, password, name)
VALUES
    (1, "admin", "admin", "admin");