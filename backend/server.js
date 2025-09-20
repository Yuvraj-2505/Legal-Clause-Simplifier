import app from '../backend/src/app.js'
import dotenv from "dotenv"
import connectDb from './src/config/db.js';
dotenv.config()
const PORT = process.env.PORT || 3000


connectDb()











app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);

})