const { Router } = require("express");
const {userRouter} = require("./userRout");
const router = Router();




router.use("/user", userRouter)

module.exports = {router};

