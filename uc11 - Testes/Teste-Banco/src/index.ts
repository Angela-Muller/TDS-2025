import { UserRepository } from "./repositories/user_repo";

async function main() {
    const userRepo = new UserRepository()
    
    console.log(await userRepo.inserir("daniel", "teste@teste.com"))
    console.log(await userRepo.inserir("Rodolfo", "norespira@sirespira.com"))
    console.log("---------------------------------------")
    console.log(await userRepo.mostrarTodos())
    
}

main()