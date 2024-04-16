import { Router, Request, Response } from "express";

const router = Router()

/**
 * http://localhost:3000/items [GET]
 */
router.get('/items', (req: Request, res: Response) => {
    res.send({ data: "MODELS"})
})


export {router}