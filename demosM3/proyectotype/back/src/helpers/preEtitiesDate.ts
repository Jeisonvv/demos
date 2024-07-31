import TCellPhone from "../dto/TCellPhone"
import TUserDto from "../dto/TUserDto"


export const preloadUsers: TUserDto[] = [
    {
        name: "Jeison Vargas",
        ege: 33,
        active: true
    },
    {
        name: "Omar Vargas",
        ege: 32,
        active: true
    },
    {
        name: "Ligia Villalobos ",
        ege: 65,
        active: true
    },
    {
        name: "Hermes Vargas",
        ege: 56,
        active: true
    }
]

export const preloadCellPhones: TCellPhone[] = [
    {
        bran: "sansung",
        model: "s30",
        color: "red",
        userId: 1
        
    },
    {
        bran: "pop",
        model: "s30",
        color: "green",
        userId: 4
        
    },
    {
        bran: "nokia",
        model: "1101",
        color: "black",
        userId: 3
    },
    {
        bran: "black berry",
        model: "panela",
        color: "brow",
        userId: 2
    }
]