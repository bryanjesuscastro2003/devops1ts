import {jest} from "@jest/globals";
import * as TypeORM from 'typeorm';
import {getUsers} from "../services/service2";
//import {UserModel} from "../db/models/PostModel"; // Import the entire TypeORM module
jest.mock('typeorm')

interface IUserModel {
    id: number, name: string, email: string
}
let mockedData: IUserModel[];
mockedData = [{id: 2, name: "John", email: "jesus"}]

describe('mockDb', () => {
    it("should return array of users", async () => {
        (TypeORM.getRepository as jest.Mock).mockReturnValue({
            find: jest.fn<() => Promise<IUserModel[]>>().mockResolvedValue(mockedData),
        });
        const data = await getUsers()
        expect(data).toEqual(mockedData)
    })
})
