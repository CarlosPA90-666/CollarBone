create database Collarbone;
use Collarbone;

create table usuarios (
	cc int not null,
    nombre varchar (49) not null,
    apellido varchar (49) not null,
    correo varchar (49) not null,
    password_ varchar (10) not null,
    primary key (cc)
);