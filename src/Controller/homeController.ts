import express from 'express';
import { Crecenciales } from '../Model/credenciales';
import { category } from '../Model/categorias';
import { Publicaciones } from '../Model/publicaciones';

export const getCredenciales = async (req: express.Request, res: express.Response) => {

    const datos = await Crecenciales.findByPk(req.params.id);

    if (datos == null) {
        res.sendStatus(404);
    } else {
        res.json(datos);
    }
};

export const createCategory = async (req: express.Request, res: express.Response) => {

    try {
        const json = JSON.parse(req.body);

        const { nombre, imagen } = json;

        await category.create({
            nombre,
            imagen
        });
    } catch (error) {

        const { nombre, imagen } = req.body;

        await category.create({
            nombre,
            imagen
        });
    }


    res.sendStatus(200);
};

export const getCategory = async (req: express.Request, res: express.Response) => {

    const data = await category.findAll();

    if (data == null) {
        res.sendStatus(404);
    } else {

        res.json(data);
    }

};

export const getPost = async (req: express.Request, res: express.Response) => {

    const data = await Publicaciones.findAll();

    if (data == null) {
        res.sendStatus(404);
    } else {
        res.json(data);
    }

};

export const createPost = async (req: express.Request, res: express.Response) => {

    try {
        const json = JSON.parse(req.body);

        const { nombre, descripcion, imagen, CredencialesId } = json;

        await Publicaciones.create({
            nombre,
            descripcion,
            imagen,
            CredencialesId
        });
    } catch (error) {

        const { nombre, descripcion, imagen, CredencialesId } = req.body;

        await Publicaciones.create({
            nombre,
            descripcion,
            imagen,
            CredencialesId
        });
    }


    res.sendStatus(200);
};