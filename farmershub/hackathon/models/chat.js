const mongoose = require("mongoose");


//define schema
const chatSchema = new mongoose.Schema({
    from:{
        type: String,
        required:true,
    },
  to:{
       type:String,
       required:true,
    },
    msg:{
        type:String,
        maxLength:50000,
        
    },
    created_at:{
        type:Date,
        required:true,
    }
});

//creating amodel
const Chat = mongoose.model("Chat",chatSchema );
module.exports=Chat;

