import {jest} from "@jest/globals";
import myService, {IUser} from "../services/service";

jest.mock('../services/service')


let mockedData: IUser[];
mockedData = [{id: 1, name: "John", email: "jesus"}]

describe('mockDb', () => {
    it("should return array of users", async () => {
        (myService.get as jest.Mock<() => Promise<IUser[]>>).mockResolvedValue(mockedData);
        const data = await myService.get();
        expect(data).toEqual(mockedData)
    })
})
