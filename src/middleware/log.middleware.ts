import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("SOY LOG0");
    next();
    
};

export {logMiddleware};