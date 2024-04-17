import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

//Controller did not contain business logic
const getBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}

const getBlogs = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS')
    }
}

const updateBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BLOGS')
    }
}

const postBlog = (req: Request, res: Response) => {
    try {
        res.send(req.body)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_BLOGS')
    }
}

const deleteBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_BLOGS')
    }
}

export {getBlog, getBlogs, postBlog, updateBlog, deleteBlog};