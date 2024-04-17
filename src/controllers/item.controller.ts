import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.services"

//Controller did not contain business logic
const getItem = async (req: Request, res: Response) => {
    try {
        const idCar = req.params.id
        const response = await getCar(idCar);
        const data = response ? response : "NOT_FOUND"
        res.send(data)
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

const updateItem = async (req: Request, res: Response) => {
    try {
        const idCar = req.params.id
        const response = await updateCar(idCar, req.body);
        res.send(response)
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEMS')
    }
}

const postItem = async (req: Request, res: Response) => {
    try {
        const responseItem = await insertCar(req.body)
        res.send(responseItem)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEMS', error)
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const idCar: string = req.params.id
        const responseItem = await deleteCar(idCar)
        res.send(responseItem)
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEMS')
    }
}

export {getItem, getItems, postItem, updateItem, deleteItem};