INSERT INTO ROLES VALUES ( 1, 'ROLE_USER' );
INSERT INTO ROLES VALUES ( 2, 'ROLE_MODERATOR' );
INSERT INTO ROLES VALUES ( 3, 'ROLE_ADMIN' );

INSERT INTO USERS (ID, USERNAME, PASSWORD, EMAIL) VALUES ( 1, 'admin', '$2a$10$fpK/NRgxjAEeRTQzdsE1PezT/QbdC9i0g1Nxdon5/igkKL/xKibWO', 'admin@gmail.com' );
INSERT INTO USERS (ID, USERNAME, PASSWORD, EMAIL) VALUES ( 2, 'user', '$2a$10$4kEvhcvoyEyatf6H0YT9r.nwNRfwMEiQP0YiMdjlqnKZNEt9/QO0S', 'user@gmail.com' );
INSERT INTO USERS (ID, USERNAME, PASSWORD, EMAIL) VALUES ( 3, 'moderator', '$2a$10$RBmwbtGVYT5GGbFJ1ODpXu.fJrKCCMQUpFopKVA7Cqoqdx.CnJUTO', 'moderator@gmail.com' );

INSERT INTO USER_ROLES VALUES ( 1, 3 );
INSERT INTO USER_ROLES VALUES ( 2, 1 );
INSERT INTO USER_ROLES VALUES ( 3, 2 );