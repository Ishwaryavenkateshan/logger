
import jwt from 'jsonwebtoken'

export class jwtToken {
    constructor() {
    }

async signin(id:string): Promise<string> {
    return await jwt.sign({user:id},'verification',{
expiresIn: 86400
    });
}

async verify(req:any):Promise<any>{
        const token = req.headers['auther'];
        console.log("tk",token)
  if (!token) return{ auth: false, message: 'No token provided.' };
        return await jwt.verify(token,'verification',(err:any, decoded:any)=>{      
            if (err) 
              return { auth: false, message: 'Failed to authenticate token.' };  
              else
               return { auth: true, message: 'success' ,verify:decoded}; 

    })  
}
}