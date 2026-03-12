CREATE DATABASE db_aula6_uc3; -- CRIANDO O BANCO
USE db_aula6_uc3; -- UTILIZANDO O BANCO

-- CRIANDO AS TABELAS

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_produto INT,
    quantidade INT,
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,

    -- Definindo FKs com CASCADE
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (id_produto) REFERENCES produtos(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

CREATE TABLE categorias (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50) NOT NULL
);

-- ADICIONANDO CAMPOS A MAIS NA TEBELA


ALTER TABLE produtos ADD COLUMN id_categoria INT;

ALTER TABLE produtos
	ADD CONSTRAINT fk_pedidos_categoria
    FOREIGN KEY (id_categoria) REFERENCES categorias(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE;
    
	-- INSERINDO OS VALORES NAS TABELAS
    
INSERT INTO usuarios (nome, email)
	VALUES 
    ("Roberto", "Roberto@gmail.com"),
    ("Marcio", "Marcio@gmail.com"),
    ("Felipe", "Felipe@gmail.com"),
    ("Paulo", "Paulo@gmail.com"),
    ("Caze", "Caze@gmail.com");
    
SELECT * FROM usuarios;
  
INSERT INTO categorias(nome)
	VALUES
    ("white"),
    ("bronze"),
    ("silver"),
    ("gold"),
    ("platinium");
    
SELECT * FROM categorias;
    
INSERT INTO produtos (nome, preco, id_categoria)
	VALUES
    ("Fonte 500w", 500.00, 1),
    ("Fonte 600w", 700.00, 2),
    ("Fonte 650w", 750.00, 4),
    ("Fonte 700w", 1000.00, 3),
    ("Fonte 850w", 1500.00, 5);
    
SELECT * FROM produtos;
    
INSERT INTO pedidos (id_usuario, id_produto, quantidade)
	VALUES
    (1, 3, 1.00),
    (2, 1, 2.00),
    (3, 5, 10.00),
    (4, 4, 4.00),
    (5, 2, 3.00);
 
SELECT * FROM pedidos;

	-- TENTANDO INSERIR UM PEDIDO COM UM id_usuario INEXISTENTE
    
INSERT INTO pedidos (id_usuario, id_produto, quantidade)
	VALUES (7, 3, 1.00);
    
SELECT * FROM pedidos; -- ELE NÃO DEIXA INSERIR, ACONTECE UM ERRO

	-- DELETANDO UM USUARIO E VENDO O COMPORTAMENTO DO CASCADE
    
delete from usuarios where id=5;

select * from pedidos; -- SELECIONA TODOS OS PEDIDOS

	-- DELETANDO UMA CATEGORIA E VENDO O COMPORTAMENTO DO CASCADE
    
delete from categorias where id=3;
select * from produtos; -- SELECIONA TODOS OS PRODUTOS

	-- DELETANDO UMA FK E VENDO O COMPORTAMENTO DO CASCADE
    
SHOW CREATE TABLE produtos;

ALTER TABLE produtos DROP FOREIGN KEY fk_pedidos_categoria; -- DELETA A CHAVE ESTRANGEIRA

    

    
