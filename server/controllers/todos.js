import express from 'express';
import todo from '../models/todo.js';
import  mongoose from 'mongoose';
const router = express.Router();

export const getTodos = async (req, res) => { 
    try {
        const todos = await todo.find();          
        res.status(200).json(todos);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createTodo = async (req, res) => {
    const {title} = req.body;

    const newtodo = new todo({ title });

    try {
        await newtodo.save();
        res.status(201).json(newtodo );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const deleteTodo = async(req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);

    await todo.findByIdAndRemove(id);

    res.json({ message: "Todo deleted successfully." });

};

export const starTodo = async(req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);
    const getTodo = await todo.findById(id);

    const updatedTodo = await todo.findByIdAndUpdate(id, { starred: !getTodo.starred }, { new: true });
    
    res.json(updatedTodo);
}
 export default router;