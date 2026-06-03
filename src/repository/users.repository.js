import { neon } from "@neondatabase/serverless";
import 'dotenv/config'

const sql = neon('process.env.DATABASE_URL');

const usersRepository = {

    async get(){
        return sql`SELECT * FROM users`;
    },

    async post(first_name, last_name, age, email, password, cpf){
        return sql`INSERT INTO users(first_name, last_name, email, senha, CPF, age_integer)
        VALUES(${first_name}, ${last_name}, ${email}, ${senha}, ${CPF}, ${age_integer})`
    },

    async put(first_name, last_name, email, senha, CPF, age_integer){
        return sql`UPDATE users SET first_name = ${first_name},
                    last_name = ${last_name},
                    age = ${age},
                    email = ${email},
                    password = ${password},
                    cpf = ${cpf} WHERE id = ${id}`
    },

    async delete(id){
        return sql`DELETE FROM users WHERE id = ${id}`;
    }

}

export default usersRepository;