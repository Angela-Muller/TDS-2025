import { ResultSetHeader, RowDataPacket } from "mysql2";
import { conexao } from "../config/database";
import { user } from "../models/user";

export class UserRepository {
    
    async mostrarTodos(): Promise<user[]> {
        const [resultados] = await conexao.query<RowDataPacket[]>('SELECT * FROM usuario')
        return resultados.map((u) => new user(u.id, u.nome, u.email))
    }
    async inserir(nome: string, email: string): Promise<user> {
        const [resultado] = await conexao.execute<ResultSetHeader>('INSERT INTO usuario (nome, email) VALUES (?, ?)',[nome, email])
        
        return new user(resultado.insertId, nome, email)
    }
}