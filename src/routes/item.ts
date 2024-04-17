import { Router, Request, Response } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item.controller";
import { logMiddleware } from "../middleware/log.middleware";

const router = Router()

/**
 * http://localhost:3000/items [GET]
 */
router.get('/', getItems)
router.get('/:id', logMiddleware ,getItem)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)


export {router}