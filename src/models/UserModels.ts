import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface UserModel {
    _id:string
    userId: Number,
    Name: String,
    mobileNumber: Number,
    token:String
}

export const UserSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        require: true
    },
    token:{
        type: String
    }
});
