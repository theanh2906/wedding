CREATE TABLE IF NOT EXISTS ROLES
(
    ID   INT,
    NAME VARCHAR(50),
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS USERS
(
    ID       INT GENERATED BY DEFAULT AS IDENTITY,
    USERNAME VARCHAR(20) UNIQUE NOT NULL,
    PASSWORD VARCHAR(200)       NOT NULL,
    EMAIL    VARCHAR(50) UNIQUE NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS USER_ROLES
(
    USER_ID INT,
    ROLE_ID INT
);

CREATE TABLE IF NOT EXISTS IMAGES
(
    ID              VARCHAR(100),
    NAME            VARCHAR(200),
    CREATE_DATE     TIMESTAMP,
    DATA            BYTEA,
    THUMBNAIL       BYTEA,
    EXTENSION       VARCHAR(10),
    SIZE            INT,
    PRIMARY KEY (ID)
);
