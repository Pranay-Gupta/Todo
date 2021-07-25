import mongoose from 'mongoose';
 const todoSchema = mongoose.Schema({
     title : String,
     starred : {
         type : Boolean,
         default : false,
     },
 });

 var todo = mongoose.model("todo",todoSchema);
 export default todo;