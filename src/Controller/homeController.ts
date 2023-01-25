import express from 'express';
import { Crecenciales } from '../Model/credenciales';
import { category } from '../Model/categorias';

export const getName = async (req: express.Request, res: express.Response) => {

    const datos = await Crecenciales.findByPk(req.params.id);

    if (datos == null) {
        res.sendStatus(404);
    } else {
        res.json(datos.getDataValue("name"));
    }
};

export const createCategory = async (req: express.Request, res: express.Response) => {


    //const json = JSON.parse(req.body);

    const { nombre, imagen } = req.body;

    await category.create({
        nombre,
        imagen
    });

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

