//import {getRepository} from "typeorm";
//import {UserModel} from "../db/models/PostModel";
//import {doConnection} from "../db/Connection";

//const userRepository = getRepository(UserModel);

export interface IUser {
    id: number, name: string, email: string
}

class Service {
    get = async (): Promise<IUser[]> => {
        try {
            //await doConnection()
            //return await userRepository.find()
            return [];
        }catch (e){
            return [];
        }
    }
}

const service = new Service()

export default service