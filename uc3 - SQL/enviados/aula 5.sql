CREATE TABLE produtos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preco VARCHAR(100) NOT NULL
);

SELECT * FROM produtos;
-- Só para eu ver como está a tabela

ALTER TABLE produtos ADD COLUMN estoque INT;
-- Adicionando estoque a tabela produtos

ALTER TABLE produtos MODIFY preco DECIMAL(10,2);
-- Alterando o conteúdo preco para DECIMAL

ALTER TABLE produtos CHANGE COLUMN nome descricao VARCHAR(100);
-- Alterando o nome da tabela nome para descricao

ALTER TABLE produtos DROP COLUMN estoque;
-- Apagando a tabela estoque

ALTER TABLE produtos RENAME TO itens;
-- Renomei a table para itens

DROP TABLE itens;
-- Apagando a tabela