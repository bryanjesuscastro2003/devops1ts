import { createConnection, Connection } from 'typeorm';
import ormconfig from './orm.config.json';
import {doConnection} from "../db/Connection";


beforeAll(async () => {
     await doConnection()
});

afterAll(async () => {
    await doConnection()
});
