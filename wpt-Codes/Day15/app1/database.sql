create database ecommerce;
use ecommerce;

create table user (id integer primary key auto_increment, firstName varchar(15), lastName varchar(15), phone varchar(12), email varchar(50), password varchar(100));
ALTER TABLE user ADD UNIQUE (email);

-- status
-- 0: non-verified, 1: active, 2: suspended
ALTER TABLE user ADD COLUMN status int(1);

create table category (id integer primary key auto_increment, title varchar(100), description varchar(1000));

create table company (id integer primary key auto_increment, title varchar(100), description varchar(1000));

create table product (id integer primary key auto_increment, title varchar(100), description varchar(1000), price float, category int, company int);

create table cart (id integer primary key auto_increment, user integer, product integer, quantity integer);

-- order master
-- status
-- 0: placed, 1: packaging, 2: dispatched, 3: out for delivery, 4: delivered, 5: cancelled
create table myOrder (id integer primary key auto_increment, user integer, totalPrice float, paidAmount float, orderDate varchar(50), status integer );

-- order details
create table orderDetails (id integer primary key auto_increment, orderId integer, product integer, price float, quantity integer);