import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToMany, Double, PrimaryGeneratedColumn } from "typeorm";
import { V4 as uuid } from "uuid";

@Entity ("produto")
export class Produto{
    @PrimaryGeneratedColumn()
    id_produto: number;

    @Column()
    thumbnail: String;

    @Column()
    nome: String;

    @Column()
    preco: Double;  

    /*Conferir depois */
    @Column()
    ingredientes: new  Array<String>;

    @Column()
    disponibilidade: boolean;

    @Column()
    volume: Number;

    @Column()
    outros: String;
}