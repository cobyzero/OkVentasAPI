import express from "express";
import { Crecenciales } from "../Model/credenciales";

export const loginUser = async (req: express.Request, res: express.Response) => {

    const json = JSON.parse(req.body);
    const { username, password } = json;

    const project = await Crecenciales.findOne({ where: { username, password } });
    if (project == null) {
      console.log('Not found!');
      res.sendStatus(404);
    } else {
        res.json(project.getDataValue("id"));
    } 
};


export const registerUser = async (req: express.Request,res:express.Response)=>{

    const { username, email, password, name} = req.body;

    await Crecenciales.create({
        username,
        email,
        password,
        name
    });

    res.sendStatus(200);
};