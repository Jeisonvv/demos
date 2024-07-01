import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: "vehicles"
})
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    marca: string
    
    @Column("integer")
    modelo: number   

    @Column({length: 100})
    color: string

}