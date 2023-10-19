import request from 'supertest';
import app from "../app"


describe('"express app normal',  () => {
      it("Should response with a -HI there-", async () => {
          const response = await request(app).get("/home");
          expect(response.status).toBe(200)
          expect(response.text).toBe("HI THERE")
          expect(response.text.length).toBe(8);
      })
});

describe("express app Get", () => {
    it("get", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty('users')
        expect(response.body.users).toBeInstanceOf(Array)
        if(response.body.users.length > 0) {
              expect(response.body.users[0])
                  .toEqual(expect.objectContaining<{id:number, name: string, email:string}>({
                       id: expect.any(Number),name: expect.any(String), email: expect.any(String)
                  }));
        }
    })
})