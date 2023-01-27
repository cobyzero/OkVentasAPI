import express from "express";
import { Users } from "../Model/users";

export const loginUser = async (req: express.Request, res: express.Response) => {

    try {
        const json = JSON.parse(req.body);
        const { usersUsername, usersPassword } = json;

        const project = await Users.findOne({ where: { usersUsername, usersPassword } });
        if (project == null) {
            console.log('Not found!');
            res.sendStatus(404);
        } else {
            res.json(project.getDataValue("usersId"));
        }
    } catch (error) {

        const { usersUsername, usersPassword } = req.body;

        const project = await Users.findOne({ where: { usersUsername, usersPassword } });
        if (project == null) {
            console.log('Not found!');
            res.sendStatus(404);
        } else {
            res.json(project.getDataValue("usersId"));
        }
    }
};


export const registerUser = async (req: express.Request, res: express.Response) => {

    const { usersUsername, usersEmail, usersPassword, usersName, usersImage } = req.body;

    await Users.create({
        usersUsername,
        usersEmail,
        usersPassword,
        usersName,
        usersImage
    });
    console.debug(req.body);
    res.sendStatus(200);
};