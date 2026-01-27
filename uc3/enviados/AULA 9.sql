-- Aula 9
      
-- Conta todos os clientes
SELECT COUNT(*) AS total_clientes FROM clientes;

-- Conta clientes de Porto Alegre
SELECT COUNT(*) FROM clientes WHERE cidade = 'Porto Alegre';

-- Soma total gasto em todas as compras
SELECT SUM(preco * quantidade) AS total_vendas
FROM compras co, produtos p
WHERE co.produto_id = p.id;


-- Preço médio dos produtos
SELECT AVG(preco) AS preco_medio FROM produtos;

SELECT TRUNCATE(AVG(preco), 2) AS preco_medio FROM produtos;

SELECT ROUND(AVG(preco), 2) AS preco_medio FROM produtos;

-- Média de idade dos clientes
SELECT AVG(idade) FROM clientes;

-- Produto mais caro
SELECT MAX(preco) AS maior_preco FROM produtos;

-- Data da última compra
SELECT MAX(data_compra) FROM compras;

-- Produto mais barato
SELECT MIN(preco) AS menor_preco FROM produtos;

-- Menor quantidade comprada
SELECT MIN(quantidade) FROM compras;

-- GROUP BY - Agrupando Resultados

SELECT categoria,nome, COUNT(*) AS qtd_produtos
FROM produtos
GROUP BY categoria, nome
ORDER BY categoria ASC;

SELECT p.categoria, SUM(p.preco * co.quantidade) AS total_vendido
FROM produtos p, compras co
WHERE p.id = co.produto_id
GROUP BY p.categoria
ORDER BY total_vendido DESC;

SELECT cidade, COUNT(*) AS qtd_clientes
FROM clientes
GROUP BY cidade
HAVING COUNT(*) > 3;  -- Só cidades com mais de 5 clientes

SELECT p.categoria, 
       AVG(p.preco) AS preco_medio,
       SUM(co.quantidade) AS unidades_vendidas
FROM produtos p, compras co
WHERE p.id = co.produto_id
GROUP BY p.categoria
HAVING AVG(p.preco) > 500 AND SUM(co.quantidade) > 10;

SELECT 
    c.cidade,
    SUM(CASE WHEN p.categoria = 'Eletrônicos' THEN 1 ELSE 0 END) AS qtd_eletronicos,
    SUM(CASE WHEN p.categoria = 'Informática' THEN 1 ELSE 0 END) AS qtd_informatica
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id AND p.id = co.produto_id
GROUP BY c.cidade;


-- EX 1

SELECT categoria, COUNT(*) AS total_produtos
	FROM produtos
    GROUP BY categoria;
    
-- EX 2

SELECT p.categoria, SUM(preco * quantidade) AS Estoque
FROM produtos p, compras co
WHERE p.id = co.produto_id
GROUP BY p.categoria;

-- EX 3

SELECT cidade, COUNT(*) AS clientes_compras_cidades
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id AND p.id = co.produto_id
GROUP BY c.cidade
ORDER BY clientes_compras_cidades DESC
LIMIT 5;

-- EX 5
SELECT cidade,ROUND(AVG(idade), 1) AS idade_media
from clientes
GROUP BY cidade ORDER BY cidade; -- Com casa decimal vai dar 45.50000

-- EX 6
SELECT c.id, c.nome, SUM(preco*quantidade) AS gastos_clientes
FROM clientes c, compras co,produtos p
WHERE c.id = co.cliente_id
AND co.produto_id= p.id
GROUP BY c.id, c.nome
HAVING SUM(p.preco* co.quantidade)>5000;

-- EX 7
SELECT avg(preco*quantidade) as ticket_medio
from compras c, produtos p
WHERE c.produto_id = p.id;


-- EX 8
SELECT p.categoria, ROUND(AVG(p.preco*co.quantidade),1)AS media_acima_1000
FROM produtos p, compras co WHERE co.produto_id = p.id
GROUP BY p.categoria
HAVING AVG (p.preco*co.quantidade)>1000;

-- EX 9
SELECT categoria, (MAX(preco) - MIN(preco)) AS preco_diferenca
FROM produtos
GROUP BY categoria
ORDER BY categoria asc;