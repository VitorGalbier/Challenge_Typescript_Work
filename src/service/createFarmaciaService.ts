import { getRepository } from "typeorm";
import { Farmacia } from "../entities/farmaciaEntitie";

type farmaciaRequest = {
    logo: String;
    nome: String;
    cnpj: String;
    endereco: String;
    horarioFuncionamento: Date;
    responsavel: String;
    telefone: String;
    outros: String;
}

export class createFarmaciaService{
    async execute({ logo, nome, cnpj, endereco, horarioFuncionamento, responsavel, telefone, outros} : farmaciaRequest) : Promise<Farmacia|Error>{
        const repositorio = getRepository(Farmacia)
        if(await repositorio.findOne({cnpj} || await repositorio.findOne({nome}))){
            return new Error("Esta farmácia já foi registrada!")
        }
        else{
            const farmacia = repositorio.create({
                logo,
                nome,
                cnpj,
                endereco,
                horarioFuncionamento,
                responsavel,
                telefone,
                outros
            })
            await repositorio.save(farmacia);
            return farmacia;
        }
    }
}