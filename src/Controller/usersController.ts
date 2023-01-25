import express from "express";
import { Crecenciales } from "../Model/credenciales";

export const loginUser = async (req: express.Request, res: express.Response) => {

    try {
        const json = JSON.parse(req.body);
        const { username, password } = json;

        const project = await Crecenciales.findOne({ where: { username, password } });
        if (project == null) {
            console.log('Not found!');
            res.sendStatus(404);
        } else {
            res.json(project.getDataValue("id"));
        }
    } catch (error) {

        const { username, password } = req.body;

        const project = await Crecenciales.findOne({ where: { username, password } });
        if (project == null) {
            console.log('Not found!');
            res.sendStatus(404);
        } else {
            res.json(project.getDataValue("id"));
        }
    }
};


export const registerUser = async (req: express.Request, res: express.Response) => {

    const { username, email, password, name, foto } = req.body;

    await Crecenciales.create({
        username,
        email,
        password,
        name,
        foto
    });
    console.debug(req.body);
    res.sendStatus(200);
};