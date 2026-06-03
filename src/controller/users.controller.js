import usersRepository from "../repository/users.repository.js";
import bcrypt from "bcrypt"
const usersController = {

    async get(){
        return usersRepository.get();
    },

    async post(request, reply){
        
        const {first_name, last_name, email, senha, CPF, age_integer } = request.body;
         let soulRonds = 10
         let hash = await bcrypt.hash(senha,soulRonds)

         return `minha senha criptografada é ${hash}`


      return usersRepository.post(first_name, last_name, email, senha, CPF, age_integer)
    
      },

    async put(request, reply){
        const { id } = request.params;
        const { first_name, last_name, email, senha, CPF, age_integer} = request.body;
        let soulRonds = 10 
        let hash = await bcrypt.hash(senha,soulRonds)
         
         return `minha senha criptografada é ${hash}`

      // return usersRepository.put(first_name, last_name, email, senha, CPF, age_integer);
    },

    async delete(request, reply){
        const { id } = request.params;
        return usersRepository.delete(id);
    }

}

export default usersController;  