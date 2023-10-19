import {getRepository} from "typeorm";
import {UserModel} from "../db/models/PostModel";

export const getUsers= async (): Promise<{id: number, name: string, email:string}[]>=>{
        const userRepository= getRepository(UserModel);
        return userRepository.find();
    }