-- exercicio 1

SELECT c.nome, p.nome
	FROM clientes c, compras co, produtos p
	WHERE c.id = co.cliente_id
		AND p.id = co.produto_id;
        
-- exercicio 2 

SELECT c.nome AS cliente, co.quantidade
	FROM clientes c, compras co, produtos p
	WHERE c.id = co.cliente_id
		AND p.id = co.produto_id
		AND co.quantidade > 1;
        
-- 2 correção

SELECT c.*
	FROM clientes c, compras co, produtos p
	WHERE c.id = co.cliente_id AND p.id = co.produto_id
		AND co.quantidade > 1;
        
-- exercicio 3
 
SELECT c.nome AS clientes, p.nome AS produtos, p.preco
	FROM clientes c, compras co, produtos p
    WHERE c.id = co.cliente_id
		AND p.id = co.produto_id
		AND c.cidade = 'Canoas'
        AND p.categoria = 'Eletrônicos';
        
-- exercicio 4

SELECT c.nome AS clientes, p.nome AS produtos
	FROM clientes c, compras co, produtos p
	WHERE c.id = co.cliente_id
		AND p.id = co.produto_id
        AND p.nome LIKE '%Gamepad 54%';
        
-- 4 correção 

SELECT c.*
	FROM clientes c, compras co, produtos p
	WHERE c.id = co.cliente_id AND p.id = co.produto_id
        AND p.nome = "Gamepad 54";

-- exercicio 5

SELECT c.nome AS clientes, p.nome AS produtos
	FROM clientes c, compras co, produtos p
	WHERE c.id = co.cliente_id
		AND p.id = co.produto_id
        AND p.nome LIKE '%Notebook%';
        
-- correção 5

SELECT c.*
	FROM clientes c, compras co, produtos p
	WHERE c.id = co.cliente_id AND p.id = co.produto_id
        AND p.nome LIKE '%Notebook%';
        
-- exercicio 6

SELECT c.nome, p.preco
	FROM clientes AS c, compras AS co, produtos AS p
	WHERE c.id = co.cliente_id
		AND p.id = co.produto_id
		AND p.preco > 1500;
        
-- correção 6
        
SELECT c.nome AS cliente, p.preco
	FROM clientes c, compras co, produtos p
	WHERE c.id = co.cliente_id AND p.id = co.produto_id
		AND p.preco > 1500;
        
-- exercicio 7

SELECT c.nome, p.categoria
	FROM clientes AS c, compras AS co, produtos AS P
    WHERE c.id = co.cliente_id
		AND p.categoria = 'Informática'
        AND c.cidade = 'Salvador';
        
-- correção 7

SELECT c.nome, p.categoria
	FROM clientes AS c, compras AS co, produtos AS P
    WHERE c.id = co.cliente_id AND p.id = co.produto_id
		AND p.categoria = 'Informática' AND c.cidade = 'Salvador';
        
-- exercicio 8

SELECT p.nome
	FROM clientes AS c, compras AS co, produtos AS P
    WHERE c.id = co.cliente_id
		AND p.id = co.produto_id
		AND c.nome = 'Ana Fernandes';
        
-- correção 8
SELECT p.*
	FROM clientes c, compras co, produtos p
    WHERE c.id = co.cliente_id AND p.id = co.produto_id
		AND c.nome = 'Ana Fernandes';
        
-- exercicio 9 

SELECT c.nome AS cliente
	FROM clientes c, compras co, produtos p
	WHERE c.id = co.cliente_id
		AND p.id = co.produto_id
		AND p.nome LIKE 'Camiseta%';
        
-- correção 9	

SELECT c.*, p.nome AS produto
	FROM clientes c, compras co, produtos p
	WHERE c.id = co.cliente_id AND p.id = co.produto_id
		AND p.nome LIKE 'Camiseta%';
        
        
-- exercicio 10

SELECT c.nome AS cliente, p.nome AS produto
	FROM clientes AS c, compras AS co, produtos AS p
		WHERE c.id = co.cliente_id
		AND p.id = co.produto_id
        AND co.data_compra BETWEEN '2025-02-01' AND '2025-02-28';
        
-- correção 10

SELECT c.*, p.*
	FROM clientes AS c, compras AS co, produtos AS p
		WHERE c.id = co.cliente_id AND p.id = co.produto_id
        AND co.data_compra BETWEEN '2025-02-01' AND '2025-02-28';