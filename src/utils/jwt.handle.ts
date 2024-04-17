import {sign, verify} from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "tokenfake01"

const generateToken = (id:string) => {
    //you can add more properties
    const jwt = sign({id},JWT_SECRET, {expiresIn: '2h'});
    return jwt
}

const verifyToken = (jwt: string) => {
    const isValid = verify(jwt, JWT_SECRET)
    return isValid
}

export {generateToken, verifyToken}

