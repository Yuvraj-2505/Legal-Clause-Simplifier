import app from '../backend/src/app.js'
import dotenv from "dotenv"
dotenv.config()
import connectDb from './src/config/db.js';
connectDb()











app.listen(3000, () => {
  console.log("server start on port num 3000");

})