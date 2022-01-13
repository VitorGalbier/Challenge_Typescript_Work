import { getRepository } from "typeorm";
import { Farmacia } from "../entities/farmaciaEntitie";

export class deleteFarmaciaService{
    async execute(id_farmacia: number){
        const repositorio = getRepository(Farmacia)
        if(!await repositorio.findOne(id_farmacia)){
            return new Error ("A farmácia com o ID informado não existe!")
        }
        else{
            await repositorio.delete(id_farmacia)
            /*Colocar uma mensagem que foi deletado com sucesso */
        }
    }
}