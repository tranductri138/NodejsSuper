import express from 'express';
import mongoose from 'mongoose';
import { BanhBao }  from './model/people.schema'
import * as dotenv from 'dotenv'
const bodyParser = require('body-parser')

dotenv.config();
const app = express();
app.use(bodyParser.json())


app.get('/' , (req, res) => {
  res.sendFile(__dirname +'/login/index.html');
});
app.get('/a' , (req, res) => {
  res.sendFile(__dirname +'/login/abc.html');
});
app.get("/tris" ,  (req , res) =>{
 res.send("<H2> Tris dep zai <H2>")
});

app.post("/banhbao" , async(req, res)=> {
  try {
    const newBanhBao = new BanhBao({...req.body});
    return res.status(200).json(await newBanhBao.save())  ;
  } catch (error) {
    console.log(error);
    return res.status(500).json("loi~ roi1`")
  }
});

const start = async() => {
  try {
    app.use(bodyParser);
    app.use(express.json());
    mongoose.connect(`${process.env.CONNECT_STRING}`)
    app.listen(process.env.PORT ,()=> {
      console.log( 'Application is run in here',process.env.PORT);
    });
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}
start();

