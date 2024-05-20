const user = [{name: "jeison vargas", id: 1}]
let id = 2
const getUsers = ()=>{
    return user
}

const createUserServer = async (name) => {
    const newUser = {
        name,
        id
    }
    id++
    user.push(newUser)
}


module.exports = {getUsers, createUserServer}