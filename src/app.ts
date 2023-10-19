import express, {Express, Request, Response} from "express"
import "dotenv/config"
import {doConnection} from "./db/Connection";
//import { getRepository } from 'typeorm';
import {UserModel} from "./db/models/PostModel";
import cors from "cors"

const app: Express = express()
app.use(express.json())
app.use(cors())


//const userRepository = getRepository(UserModel);

app.get("/home", (req: Request, res: Response) => {
    return res.send("HI THERE")
})

app.get("/", async (req: Request, res: Response) => {
    try {
        //await doConnection()
        //const users = await userRepository.find();
        return res.json({users: [{id: 2, name: "kava", email: "kaka@gmail.com"}]});
    }catch (e) {
        return res.json({users: [{id: 1, name: "bryan", email: "jesus@gmail.com"}]});
        //return res.send("Error get")
    }
})

app.post("/", async (req: Request, res: Response) => {
    try {
        //await doConnection()
        const {name, email} = req.body;
        const user = new UserModel();
        user.email = email;
        user.name = name;
        //const newUser = await userRepository.save(user);
        return res.json(user);
    }catch (e) {
        return res.send("Error post" + e)
    }
})

export default app;