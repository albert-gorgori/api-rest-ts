import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request{
    user?: string | JwtPayload
}

const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send({data: "Solo lo ve personas con JWT", user: req.user})
    } catch (error) {   
        handleHttp(res, 'ERROR_GET_ORDER')
    }
}

export {getItems};