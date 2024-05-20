const {getUsers, createUserServer} = require("../services/userServer")

const userController = async (req, res)=>{
    const user = await getUsers()
    res.status(200).json(user)
};

const createUserController = async (req, res) =>{
    const {name} = req.body;
    try {
        await createUserServer(name)
        res.status(201).json({
            message: "usuario creado correctamene"
        })
    } catch {
        res.status(500).json({
            error: "no se pudo crear el usuario"
        })
    }
}



module.exports = {userController, createUserController}