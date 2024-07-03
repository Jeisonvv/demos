import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Vehicle } from "./vehicle"
// este decorador convierte la clase en una entidad para entidad de user es recomendale que se coloque en plural 
@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column("integer")
    ege: number

    @Column()
    active: boolean

    @OneToOne(() => Vehicle)
    @JoinColumn()
    vehicle: Vehicle

}