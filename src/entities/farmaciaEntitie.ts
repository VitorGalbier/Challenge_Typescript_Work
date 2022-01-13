import { Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity ("farmacia")
export class Farmacia {
    @PrimaryGeneratedColumn()
    id_farmacia: number;
    
    @Column()
    logo: String;
    
    @Column()
    nome: String;

    @Column()
    cnpj: String;

    @Column()
    endereco: String;

    @Column()
    horarioFuncionamento: Date;

    @Column()
    responsavel: String;

    @Column()
    telefone: String;

    @Column()
    outros: String;

}