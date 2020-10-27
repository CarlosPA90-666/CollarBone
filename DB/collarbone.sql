create database Collarbone;
use Collarbone;

create table usuarios (
    nombre varchar (49) not null,
    apellido varchar (49) not null,
    correo varchar (49) not null,
    password_ varchar (100) not null,
    primary key (correo)
);

create table camisetas(
Nombre varchar(40),
NumeroDisponible int,
TallasDisponibles varchar(40),
Precio double,
URLImagen varchar(200)
);


select * from usuarios;
DELETE FROM `Collarbone`.`usuarios` WHERE (`correo` = 'andrescamilolr@gmail.com');
