create database ecommerce;
use ecommerce;

create table product (id integer primary key auto_increment, title varchar(100), description varchar(1000), price float);

insert into product (title, description, price) values ('product 1', 'description of product 1', 100);
insert into product (title, description, price) values ('product 2', 'description of product 2', 200);
insert into product (title, description, price) values ('product 3', 'description of product 3', 300);
insert into product (title, description, price) values ('product 4', 'description of product 4', 400);