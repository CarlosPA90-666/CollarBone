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

create table camisetas(
Nombre varchar(40),
NumeroDisponible int,
TallasDisponibles varchar(40),
Precio double,
URLImagen varchar(200)
);

INSERT INTO camisetas values ('Worlds Parallels', 15, 'M', 46000 ,'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/657x/17f82f742ffe127f42dca9de82fb58b1/5/1/51797-1.jpg');
INSERT INTO camisetas values ('Free Board', 15, 'M', 46000 ,'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/657x/17f82f742ffe127f42dca9de82fb58b1/5/2/52591-1.jpg');
INSERT INTO camisetas values ('My livE', 15, 'M', 46000 ,'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/657x/17f82f742ffe127f42dca9de82fb58b1/5/1/51799-1.jpg');
INSERT INTO camisetas values ('Only Black', 15, 'M', 40000 ,'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/657x/17f82f742ffe127f42dca9de82fb58b1/4/5/45754-2.jpg');
INSERT INTO camisetas values ('Thug Dog', 15, 'M', 46000 ,'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/657x/17f82f742ffe127f42dca9de82fb58b1/4/7/47923-1.jpg');
INSERT INTO camisetas values ('Box On', 15, 'M', 46000 ,'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/657x/17f82f742ffe127f42dca9de82fb58b1/4/9/49056-1.jpg');

INSERT INTO camisetas values ('Space Happines', 15, 'M', 46000 ,'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/657x/17f82f742ffe127f42dca9de82fb58b1/5/1/51798-1.jpg');
INSERT INTO camisetas values ('Rebel Black', 15, 'M', 46000 ,'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/657x/17f82f742ffe127f42dca9de82fb58b1/3/8/38904-3.jpg');
INSERT INTO camisetas values ('Street Rat', 15, 'M', 46000 ,'https://www.mattelsa.net/media/catalog/product/cache/1/small_image/415x/05e17a266b0e9cc26fb81a2e0bed7e78/5/1/51796-1.jpg');


drop table camisetas;

select * from usuarios;
select * from camisetas;
SELECT COUNT(URLImagen) FROM camisetas;

