const mongoose = require("mongoose")
require("dotenv").config()

const dbcon = async () => {
  await  mongoose.connect(process.env.MONGO_URL)
}

module.exports = {dbcon}