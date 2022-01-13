import { Entity, Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Farmacia } from "./farmaciaEntitie";


@Entity ("farmaciaSede")
export class FarmaciaSede{
    @PrimaryGeneratedColumn()
    id_sede: number;

    Column()
    nome: String;

    @OneToMany(() => Farmacia)
    @JoinColumn({name: "farmacia_id"})
    farmacia_id: Farmacia; 
}