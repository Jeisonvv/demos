import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity({
    name: "cellPhones"
})

export class Cellphone{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    bran: string

    @Column()
    model: string

    @Column()
    color: string

    @ManyToOne(()=> User, (user)=> user.cellPhones)
    user: User
}