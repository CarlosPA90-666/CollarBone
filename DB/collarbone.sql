create database Collarbone;
use Collarbone;

create table usuarios (
    nombre varchar (49) not null,
    apellido varchar (49) not null,
    correo varchar (49) not null,
    password_ varchar (100) not null,
    primary key (correo)
);


create table administrador (
	id int auto_increment,
    correo varchar(49) not null,
    primary key (id),
    FOREIGN KEY (correo) REFERENCES usuarios(correo) 
);

create table camisetas (
	nombre varchar (40) not null,
    imagen varchar (280) not null,
	des varchar (90) not null,
    primary key (nombre)
);

select password_ from usuarios where correo = 'andrescamilolr@gmail.com';

drop table camisetas ;
INSERT INTO `Collarbone`.`camisetas` (`nombre`, `imagen`, `des`) values ('Worlds Parallels', 'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/657x/17f82f742ffe127f42dca9de82fb58b1/5/1/51797-1.jpg', 'Camiseta manga larga negra con ilustracsión blanca en espalda, pecho y mangas');
select * from camisetas;
select imagen from camisetas where imagen = 'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/657x/17f82f742ffe127f42dca9de82fb58b1/5/1/51797-1.jpg';
select * from usuarios;
DELETE FROM `Collarbone`.`usuarios` WHERE (`correo` = 'andrescamilolr@gmail.com');

select * from administrador;

