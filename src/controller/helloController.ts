import { User } from '../model/user.js';
import { Request, Response } from "express";

export default function getUser (req:Request, res:Response){
    const user = new User("aa", "bb")
    res.send(user.toString());
}