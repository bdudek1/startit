import path from 'path';
import { Request, Response } from "express";

export function getForm (req: Request, res: Response){
  res.sendFile(path.join(path.resolve(), 'views/form.html'));
}

export function postForm (req: Request, res: Response){
  res.send('Thanks for your message!');
}