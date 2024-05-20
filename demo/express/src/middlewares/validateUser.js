const validateUser = (req, res, next) =>{
    const {name} = req.body;
    if(!name){
        res.status(400).json({
            error: "faltan datos en la solicitud"
        });
    }else{
        next();
    }
};


module.exports = {validateUser}