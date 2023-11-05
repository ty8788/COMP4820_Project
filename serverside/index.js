require('dotenv').config()
// get dependencies
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors')
var valid


const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String
})
const User = new mongoose.model("User", userSchema)
const mongoString = process.env.DATABASE_URL
const PORT = process.env.PORT || 8000;

// connect to database
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

// create instance of express, define use statements
const app = express();
app.use(cors())
app.use(express.json());
app.use(require('body-parser').json());
//app.use('/', routes)





app.get('/getAll', (req, res) => {
    console.log('Received a GET HTTP method');
    console.log(req);
    return res.send(req)
  });


app.get('/Login', (req, res) => {
  if(valid) return res.send({message:"Success"})
  else return res.send({message:"Failure"})
});

async function retrieve(username){
  const doc = await User.findOne({username : username}).exec()
  console.log(doc)
}

// handle a login request
app.post("/Login",async (req,res) => {
  const username = req.body.username
  const password = req.body.password
  console.log(username)
  console.log("Recieved Login Request")
  
  try{
    const data = await User.findOne({username:username})
    JSON.stringify(data)
    console.log(data)
    if(data){
      console.log("success")
  
      if(data.password === password){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message:"Success"}))
      }
      else {
      res.json({message : "Failure"})
      }
    }
    else{
      res.json({message : "No user with given username"}) 
    }
  }
  catch(error){
    return
  }  
})
  
app.post("/Register",async (req,res)=>{
  console.log(req.body) 
  const {name,username,email,password} = req.body;
  const user = User.findOne({email:email})    
  const data = new User({name,username,email,password})
      try{
        const saveData = await data.save()
        res.status(200).json(saveData);
        console.log("Data Write Successful: ", data )
      }
      catch(error){
        res.status(500).json({message : "Error"})
      }
        
    })
  
app.put('/users', (req, res) => {
    console.log('Received a PUT HTTP method');
    return res.send();
  });
  
app.delete('/users', (req, res) => {
    console.log('Received a PUT DELETE method');
    return res.send('Received a DELETE HTTP method');
  });

app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);
})





