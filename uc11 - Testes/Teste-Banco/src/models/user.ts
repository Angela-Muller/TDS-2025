export class user {

    id?: number | null
    nome: String
    email: String

    constructor(id: number | null = null, nome: String, email: String) {
        this.id = id
        this.nome = nome
        this.email = email
    }

}