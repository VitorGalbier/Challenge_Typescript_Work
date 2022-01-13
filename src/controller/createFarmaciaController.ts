import { createFarmaciaService } from "../service/createFarmaciaService";
import { Request, Response } from "express";

export class farmaciaCreateController{
    async handle(request: Request, response: Response){
        const {logo, nome, cnpj, endereco, horarioFuncionamento, responsavel, telefone, outros} = request.body
        const servico = new createFarmaciaService
        const resultado = await servico.execute({logo, nome, cnpj, endereco, horarioFuncionamento, responsavel, telefone, outros})
        if(resultado instanceof Error){
            return response.status(400).json(resultado.message);
        }
        else{
            return response.json(resultado);
        }
    }
}