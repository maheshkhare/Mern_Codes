create database ecommerce;
use ecommerce;

create table user (id integer primary key auto_increment, firstName varchar(15), lastName varchar(15), phone varchar(12), email varchar(50), password varchar(100));

create table category (id integer primary key auto_increment, title varchar(100), description varchar(1000));

create table company (id integer primary key auto_increment, title varchar(100), description varchar(1000));

create table product (id integer primary key auto_increment, title varchar(100), description varchar(1000), price float, category int, company int);

