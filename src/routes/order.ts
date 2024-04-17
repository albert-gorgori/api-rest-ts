import { Router } from "express";
import { getOrders } from "../services/order.services";
import { getItems } from "../controllers/order.controller";
import { checkJwt } from "../middleware/session.middleware";
/**
 * This route file will be only valid for users that had the session activate, and a valid JWT 
 */

const router = Router()

router.get("/", checkJwt, getItems);

export {router}