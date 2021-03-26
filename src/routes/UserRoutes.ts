import express from 'express';
import { UserController } from '../controllers/UserController';
import { Request, Response } from 'express';


export class UserRouter {
    constructor(private userController: UserController) {
    }
    userRouter(app: express.Application) {
        app.post('/user', (req: Request, res: Response) => {
            this.userController.userCreate(req, res)
        })
        app.get('/get/:id',(req: Request, res: Response) => {
            this.userController.userRead(req, res)
        });
        app.get('/user/get', (req: Request, res: Response) => {
            this.userController.userReadAll(req, res)
        });
        app.put('/update/:id', (req: Request, res: Response) => {
            this.userController.userUpdate(req, res)
        });
        app.delete('/delete/:id', (req: Request, res: Response) => {
            this.userController.userDelete(req, res)
        });
    }
}

