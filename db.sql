DDL - DEFINIÇÕES DA  TABELA


-- Para criar um banco de dados --
CREATE DATABASE fs06_api;

-- Para selecionar o banco de dados  --
USE fs06_api;

-- Criar tabela --
CREATE TABLE db_veiculos (
    id INT (11) PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR (50) NOT NULL, 
    modelo VARCHAR (50) NOT NULL,
    ano INT (4) NOT NULL
);

-- Para listar os bancos de dados de um servidor --
SHOW DATABASES; 

-- Para listar as tabelas de um banco de dados --
SHOW TABLES;

-- Para criar uma tabela --
CREATE TABLE db_teste (
    id INT (11) PRIMARY KEY AUTO_INCREMENT, -- UUID --
    nome VARCHAR (50) NOT NULL, -- NOT NULL TORNA O CAMPO OBRIGATÓRIO --
    email VARCHAR (50) NOT NULL
);

-- Para inserir dados na tabela --
INSERT INTO db_veiculos (ano, modelo, nome)
VALUES (2010, 'CIVIC', 'HONDA');

INSERT INTO db_veiculos (ano, modelo, nome)
VALUES (1980, 'FUSCA', 'VOLKSWAGEN');

INSERT INTO db_veiculos (ano, modelo, nome)
VALUES (1995, 'CORSA', 'FORD');

INSERT INTO db_veiculos (ano, modelo, nome)
VALUES (2018, 'UNO', 'FIAT');

INSERT INTO db_veiculos (ano, modelo, nome)
VALUES (2018, 'KOMBI', 'FIAT');

INSERT INTO db_veiculos (ano, modelo, nome)
VALUES (2023, 'COROLLA', 'TOYOTA');


CREATE TABLE tb_cliente (
    id INT (11) PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR (50) NOT NULL, 
    cpf CHAR (11) NOT NULL,
    email VARCHAR (50) NOT NULL
);

INSERT INTO tb_cliente (nome, cpf, email)
VALUES ('Victor Adler', '03260761314', 'victoradler10@gmail.com');

INSERT INTO tb_cliente (nome, cpf, email)
VALUES ('Alessandro Feitoza', '01236977789', 'alessandrofeitoza@gmail.com');

INSERT INTO tb_cliente (nome, cpf, email)
VALUES ('Ricardo Guilherme', '12388866611', 'ricardoguilherme@gmail.com');


INSERT INTO tb_cliente (nome, email, cpf) VALUES ('não definido','---','---')


-- adicionando a coluna que referencia o cliente
ALTER TABLE db_veiculos ADD COLUMN cliente_id INT (11) NOT NULL DEFAULT 3;

-- CRIANDO A RELACAO ENTE AS DUAS TABELAS
ALTER TABLE  db_veiculos ADD FOREIGN KEY (cliente_id) REFERENCES tb_cliente(id);



--  CRIANDO TABELA PRODUTOS --
CREATE TABLE tb_produto (
    id INT (11) PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR (50) NOT NULL, 
    quantidade CHAR (11) NOT NULL,
    descricao VARCHAR (200) NOT NULL,
    categoria VARCHAR (50) NOT NULL
);

INSERT INTO tb_produto (nome, quantidade, descricao, categoria)
VALUES ('Teclado Mecanico', '05', 'teclado mecanico para gamers', 'Informática');

INSERT INTO tb_produto (nome, quantidade, descricao, categoria)
VALUES ('Mouse Gamer', '10', 'mouse gamer para gamers', 'Informática');



