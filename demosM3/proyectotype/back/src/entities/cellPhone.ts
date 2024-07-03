import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "cellPhones"
})

export class Cellphone{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Bran: string

    @Column()
    model: string

    @Column()
    color: string
}