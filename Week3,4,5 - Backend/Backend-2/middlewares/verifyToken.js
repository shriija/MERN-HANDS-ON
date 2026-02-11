import jwt from 'jsonwebtoken'
export function verifyToken(req, res, next){
    //token verification logic

    //get token from req ( using cookie-parser)
    let signedToken = req.cookies.token //{ token : "" }
    if (!signedToken){
        return res.status(401).json({message:"please login first"})
    }
    //verify token (decode)
    //if token is invalid , it will throw a error so we use try catch as its not not a part of express or we can use verify
    let decodedToken = jwt.verify(signedToken,'abcdef')
    console.log("decoded token:",decodedToken)
}