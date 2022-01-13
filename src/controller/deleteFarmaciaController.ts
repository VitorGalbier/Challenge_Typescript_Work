import { deleteFarmaciaService } from "../service/deleteFarmaciaService";
import { Request, Response } from "express";

export class deleteFarmaciaController{
    async handle(request: Request, response: Response){
        const {id_farmacia: id_farmacia } = request.params
        const servico = new deleteFarmaciaService
        const resultado = await servico.execute(id_farmacia)
        if(resultado instanceof Error){
            return response.status(400).json();
        }
        else{
            return response.end();
        }
    }
    }
}