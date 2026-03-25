import mysql from 'mysql2/promise'

export const conexao = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "meu_db",
    waitForConnections: true
})