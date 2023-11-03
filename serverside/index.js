require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors')

const mongoString = process.env.DATABASE_URL
const PORT = process.env.PORT || 8000;


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})


const app = express();
app.use(cors())
app.use(express.json());
app.use('/api', routes)

app.get("/message", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);
})




