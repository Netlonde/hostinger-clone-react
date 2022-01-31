const jwt = require("jsonwebtoken");
const config = require("../../config/auth");
const {promisify} = require("util");

module.exports = async (req,res,next) => {
    const auth = req.headers.authorization;

    if(!auth) return res.status(401).json({
        error: true,
        message: "usuário não autenticado."
    })

    const [, token] = auth.split(' ');

    try{
        const decoded = await promisify(jwt.verify)(token, config.secret);

        if(!decoded) return res.status(401).json({
            error: true,
            message: "Token inválido"
        })

        req.user_id = decoded.id;
        next();
    }catch{
        return res.status(401).json({
            error: true,
            message: "Token inválido"
        })
    }

}