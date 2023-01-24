import express from 'express';
import { Crecenciales } from '../Model/credenciales';
export const getName = async (req: express.Request, res: express.Response) => {

    const datos = await Crecenciales.findByPk(req.params.id);

    if (datos == null) {
        res.sendStatus(404);
    } else {
        res.json(datos.getDataValue("name"));
    }
};