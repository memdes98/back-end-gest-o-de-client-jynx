import usersController from "../controller/users.controller.js";

export default function usersRoutes(fastify){
    
    fastify.get("/get", async () => {
        return usersController.get();
    })
    
    fastify.post("/post", async (request, reply) => {
        return usersController.post(request, reply);
    })
    
    fastify.put("/put/:id", async (request, reply) => {
        return usersController.put(request, reply);
    })

    fastify.delete("/delete/:id", async (request, reply) => {
        return usersController.delete(request, reply);
    })

}