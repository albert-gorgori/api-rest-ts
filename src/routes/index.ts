import { Router } from "express";
import { readdirSync} from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router()

/**
 *
 * @returns
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift()
    return file
}
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index"){
        //Dynamic Import typescript
        import(`./${cleanName}`).then((moduleRoute) => {
            // console.log(`Se està creando la ruta..../${cleanName}`);
            router.use(`/${cleanName}`, moduleRoute.router)
        })
        
    }
})

export {router}