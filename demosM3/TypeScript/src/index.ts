// typeScript en este leguaje de furte tipado esta ayuda a no generar errores mas adelante para esto colocamos que tipo de dato va a contener la variable 
const num2: number = 15;
const num1: number = 5;

// para las formulas es buna practica colocar que dato reciben los parametros de la funcion y que dato devuelven 
const precio = (quantity: number, preci: number): number => {
    return quantity * preci
}

// para los odjetos tenemos es una buena practica creamos interface esto nos permite cotrolar el tipo de dato que va en cada objeto 

// como comvencion se coloca la I mayuscula y la primera letra tabien es en mayuscula 
interface IAddress {
    street: string,
    city: string
}
// podemos colocar un interface dentro de otra para completar todos los datos 
interface IUser {
    name: string,
    ege: number,
    email: string,
    active: boolean,
    address: IAddress
}

// para crear el objeto le temos que decir que se tine que adecuar a la interface de Iuser esto quiere decir que tiene que tener estos cuatro propiedades no puede tener menos ni mas 

const jeison: IUser = {
    name: "jeison vargas",
    ege: 34,
    email: "jeison@gmail.com",
    active: true,
    address: {
        street: "calle simpre viva 23 #65 - 26",
        city: "sprinfild"
    }

}

const users: IUser[] = []


function createUser(name: string, ege: number, email: string, active: boolean, street: string, city: string){
    const newUser: IUser = {
        name: name,
        ege: ege,
        email: email,
        active: active,
        address:{
            street: street,
            city
        }
    }
    users.push(newUser)
}

createUser("omar",23,"gamil.com",true,"mi casa","bogota")
createUser("jeiosn",23,"gamil.com",true,"mi casa","bogota")
console.log(users)




