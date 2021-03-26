import mongoose from 'mongoose';
import { UserSchema, UserModel } from '../models/UserModels';

const UserModel = mongoose.model('Student', UserSchema);
export class UserDao {

    async save(body: UserModel) {
        const user = new UserModel(body);
        return await user.save();
    }
    async getAll() {
        const user = UserModel.find({})
        return await user;
    }
    async getById(id: String) {
        const user = UserModel.findOne({ _id: id })
        return await user;
    }
    async userUpdate(id: String, body: UserModel) {
        await UserModel.findByIdAndUpdate(id, body);
        const user = UserModel.findOne({ _id: id })
        return await user;
    }
    async userDelete(id: String) {
        const user = UserModel.deleteOne({ _id: id });
        return await user;
    }
}

