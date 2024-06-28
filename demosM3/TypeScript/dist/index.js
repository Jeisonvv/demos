"use strict";
// typeScript en este leguaje de furte tipado esta ayuda a no generar errores mas adelante para esto colocamos que tipo de dato va a contener la variable 
const num2 = 15;
const num1 = 5;
// para las formulas es buna practica colocar que dato reciben los parametros de la funcion y que dato devuelven 
const precio = (quantity, preci) => {
    return quantity * preci;
};
// para crear el objeto le temos que decir que se tine que adecuar a la interface de Iuser esto quiere decir que tiene que tener estos cuatro propiedades no puede tener menos ni mas 
const jeison = {
    name: "jeison vargas",
    ege: 34,
    email: "jeison@gmail.com",
    active: true,
    address: {
        street: "calle simpre viva 23 #65 - 26",
        city: "sprinfild"
    }
};
const users = [];
function createUser(name, ege, email, active, street, city) {
    const newUser = {
        name: name,
        ege: ege,
        email: email,
        active: active,
        address: {
            street: street,
            city
        }
    };
    users.push(newUser);
}
createUser("omar", 23, "gamil.com", true, "mi casa", "bogota");
createUser("jeiosn", 23, "gamil.com", true, "mi casa", "bogota");
console.log(users);
