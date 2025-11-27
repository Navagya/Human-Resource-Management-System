import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next)=>{
    try{
        //get token from header
        const token = req.header("Authorization")?.split(" ")[1]; //"Bearer token"
        
        //if no token
        if(!token){
            return res.status(401).json({message:"No token provided, Access denied"});

        }
        //verify token
        const verified =jwt.verify(token,process.env.JWT_SECRET);

        //add user data to req

        req.user=verified;

        //allow request to continue
        next();



    }catch(err){
        res.status(400).json({message:"Invalid or expired token"});
    }
};

export default authMiddleware;