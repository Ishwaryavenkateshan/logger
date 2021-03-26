import mongoose from 'mongoose'
import * as dotenv from 'dotenv';


export class MongoConfig {
    constructor() {
        dotenv.config()
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Users', {
             useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
                console.log('DB Connnected');
            }).catch(() => {
                console.log('Err on connection');
            });
            
    }
}
