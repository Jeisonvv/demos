// importante al crear el archivo  hay que colocar la primera en mayuscula y en singular
// llamamos a mongoose
const mongoose = require("mongoose")
//creamos el esquema (schemas) de los datos que vamos a guardar 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    ege: Number,
    vehicle: {
        type: mongoose.Schema.ObjectId,
        ref: "Vehicle"
    }
})

//creamos el modelo de datos la primera tiene que ser en mayuscula y en singuar
const User = mongoose.model("User", userSchema)

// despues lo exportamos

module.exports = {User}

