const {appmongoose} = require("./src/server")
const {dbcon} = require("./src/config/dbcon")

dbcon().then(
    res =>{
        appmongoose.listen(3002, () => {
            console.log("appmongoose esta en sevicio esperando peticiones por el puerto 3002")
        })
    }
)
