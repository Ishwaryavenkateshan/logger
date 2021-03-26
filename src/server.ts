import cors from 'cors';
import express from 'express';
import { MongoConfig } from './config/MongoConfig'
import { UserRouter } from './routes/UserRoutes';
import bodyParser from 'body-parser';
import { UserController } from './controllers/UserController';
import { UserDao } from './dao/UserDao';
import { UserService } from './service/UserService';
import  {logger} from "./logger";
import dotenv from 'dotenv';
dotenv.config();
export class UserServer {
    constructor(private userRoute: UserRouter) {
        this.start();
    }

    start(): void {

        const app: express.Application = express();
        app.use(cors());
        app.use(bodyParser.json());
        new MongoConfig();
        app.get('/', (req, res) => {
            res.send({ status: "Success" });
        });
        this.userRoute.userRouter(app)
        app.listen(4000, () => {
            
            logger.info('Server running on port 4000');
            
        });
    }
}

new UserServer(new UserRouter(new UserController(new UserService(new UserDao()))))