import express from 'express';
import { Users } from '../Model/users';
import { Categories } from '../Model/categories';
import { Post } from '../Model/post';

export const getCredenciales = async (req: express.Request, res: express.Response) => {

    const datos = await Users.findByPk(req.params.id);

    if (datos == null) {
        res.sendStatus(404);
    } else {
        res.json(datos);
    }
};

export const createCategory = async (req: express.Request, res: express.Response) => {

    try {
        const json = JSON.parse(req.body);

        const { categoriesName, categoriesImage } = json;

        await Categories.create({
            categoriesName,
            categoriesImage
        });
    } catch (error) {

        const { categoriesName, categoriesImage } = req.body;

        await Categories.create({
            categoriesName,
            categoriesImage
        });
    }


    res.sendStatus(200);
};

export const getCategory = async (req: express.Request, res: express.Response) => {

    const data = await Categories.findAll();

    if (data == null) {
        res.sendStatus(404);
    } else {

        res.json(data);
    }

};

export const getPost = async (req: express.Request, res: express.Response) => {

    const data = await Post.findAll();

    if (data == null) {
        res.sendStatus(404);
    } else {
        res.json(data);
    }

};

export const createPost = async (req: express.Request, res: express.Response) => {

    try {
        const json = JSON.parse(req.body);

        const { postName, postDescription, postImage, usersId } = json;

        await Post.create({
            postName,
            postDescription,
            postImage,
            usersId
        });
    } catch (error) {

        const {  postName, postDescription, postImage, usersId  } = req.body;

        await Post.create({
            postName,
            postDescription,
            postImage,
            usersId
        });
    }


    res.sendStatus(200);
};