require('dotenv').config()
// get dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')



const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String
})

const commentSchema = new mongoose.Schema({
  name: String,
  page: String,
  comment: String
})

const User = new mongoose.model("User", userSchema)
const Comments = new mongoose.model("Comments", commentSchema)
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

//create new user
app.post("/Register",async (req,res)=>{
  console.log(req.body) 
  const {name,username,email,password} = req.body;
  const user = User.findOne({email:email})    
  const data = new User({name,username,email,password})
      try{
        const saveData = await data.save()
        res.status(200).json({message : "Success"});
        console.log("Data Write Successful: ", data )
      }
      catch(error){
        res.status(500).json({message : "Error"})
      }
        
    })

//post comment
app.post("/getComments", async (req, res) => {
  const {name, page, comment} = req.body;
  console.log("Recieved comment post request")
  const newComment = new Comments({name, page, comment})
  try{
    const saveData = await newComment.save()
    res.status(200).json({message : "Success"});
    console.log("Data Write Successful: ", saveData )
  }
  catch(error){
    res.status(500).json({message : "Error"})
  }
})


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


// get all comments from database for a user
app.get("/getComments/:user", async (req, res) => {
  console.log("Recieved request to get comments")
  try{
    let comments = await Comments.find({page:req.params.user});
    JSON.stringify(comments)
    if(comments){
      console.log("success")
      let result = []
      for(let i = 0; i < comments.length; i++){
        result.push(comments[i].comment)
      }
      res.send(result)
    }
  }
  catch(error){
    console.log(error)
    return
  }
})


app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);
})





