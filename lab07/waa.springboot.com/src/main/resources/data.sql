INSERT into POST (id, title, content, author) VALUES (1, 'MIU','Life is structured in layers','Dean');
INSERT into POST (id, title, content, author) VALUES (2, 'React','React is a good SPA library','Dean');
INSERT into POST (id, title, content, author) VALUES (3, 'Spring','Spring is awesome','Dean');
INSERT into POST (id, title, content, author)  VALUES (4, 'SpringBoot','This is a module that works over spring modules','John');

INSERT into USER (id, name, username, password, ACTIVE)  VALUES (111, 'Dean','dean','1234',true);
INSERT into USER (id, name, username, password, ACTIVE)  VALUES (112, 'Zaineh','zaineh','1234',true);

INSERT INTO ROLE(ROLE_ID, ROLE) VALUES (1, 'USER');
INSERT INTO ROLE(ROLE_ID, ROLE) VALUES (2, 'ADMIN');

insert into USER_ROLES(USER_ID, ROLE_ID) values (111, 2);
insert into USER_ROLES(USER_ID, ROLE_ID) values (112, 1);


-- INSERT into POST (id, title, content, author) VALUES (1, 'MIU','Life is structured in layers','Dean');
-- INSERT into POST (id, title, content, author) VALUES (2, 'React','React is a good SPA library','Dean');
-- INSERT into USER_POSTS (USER_ID, POSTS_ID) VALUES (111,1);
-- INSERT into USER_POSTS (USER_ID, POSTS_ID) VALUES (111,2);INSERT into POST (id, title, content, author) VALUES (3, 'Spring','Spring is awesome','Dean');
-- INSERT into POST (id, title, content, author)  VALUES (4, 'SpringBoot','This is a module that works over spring modules','John');
--
-- INSERT into USER (id, name) VALUES (111, 'Dean');
-- INSERT into USER (id, name) VALUES (112, 'Blen');
-- INSERT into USER (id, name) VALUES (113, 'Samson');
-- INSERT into USER (id, name) VALUES (114, 'Samson');
-- INSERT into USER (id, name) VALUES (115, 'Dean');
--
--
-- INSERT into USER_POSTS (USER_ID, POSTS_ID) VALUES (112,3);
-- INSERT into USER_POSTS (USER_ID, POSTS_ID) VALUES (113,4);
