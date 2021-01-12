const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());



// connect to database
mongoose.connect ('mongodb+srv://DevFaizaan:Mongo10@testing.3vubx.mongodb.net/Testing?retryWrites=true&w=majority', { useUnifiedTopology: true ,  useNewUrlParser: true }, ()=> 
console.log('Succesfully connected to DB'));





app.listen(5000, ()=> {
    console.log('Express server started')
});
