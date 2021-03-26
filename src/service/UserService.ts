import { UserDao } from "../dao/UserDao";
import { UserModel } from "../models/UserModels";
import * as jwt from 'jsonwebtoken';

export class UserService {
   
    constructor(private userDao: UserDao) {
    }
  
    async userCreate(body: UserModel):Promise<UserModel | any >{
        // token: jwt.sign(,"secretkey");
        return await this.userDao.save(body);
    }
    async userRead(id:String):Promise<UserModel | any >{
        return await this.userDao.getById(id);
    }
    async userReadAll():Promise<UserModel | any > {
        return await this.userDao.getAll();
    }
    async userUpdate(id:String,body: UserModel):Promise<UserModel | any > {
        return await this.userDao.userUpdate(id,body);
    }
    async userDelete(id:String):Promise<UserModel | any > {
        return await this.userDao.userDelete(id);
    }
}