const yup = require("yup");
const bcryptjs = require("bcryptjs");

const User = require("../Models/User");

class UserController{
    async index(req,res){
        try{
            const users = await User.find({}).select('email'); // para remover o id adicione -_id
            return res.status(200).json(users)
        }catch{
            return res.status(400).json({
                error: true,
                message: "Não foi possível acessar ao BD."
            })
        }
    }

    async store(req,res){

        let schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(4).max(12).required(),
        }) 

        const userIsValid = schema.isValid(req.body);

        if(!userIsValid) return res.status(400).json({
            error: true,
            message: "Usuário inválido"
        })


        const {email, password} = req.body;

        let userExist = await User.findOne({email});

        if(userExist) return res.status(400).json({
            error: true,
            message: "Usário já existe",
        })

        const data = {email, password};

        data.password = await bcryptjs.hash(data.password, 8);

        await User.create(data, (err)=> {
            if(err) return res.status(400).json({
                error: true,
                message: "Erro ao tentar cadastrar o usuário no BD"
            })
        })


        return res.status(200).json({
            error: false,
            message: "Usuário cadastrado com sucesso!"
        })
    }

    async update(req, res){
        try{
            const user = User.findById(req.user_id)

            if(!user) return res.status(400).json({
                error: true,
                message: "Usuário não encontrado."
            })

            await user.updateOne(req.body);

            return res.status(200).json({
                message: "Usuário atualizado com sucesso!"
            })
        }catch{
            return res.status(400).json({
                error: true,
                message: "Falha ao acessar o BD."
            })
        }
    }

    async delete(req, res){
        try{
            const user = await User.findById(req.user_id)

            if(!user) return res.status(400).json({
                error: true,
                message: "Usuário não existe!"
            })

            await User.findByIdAndRemove(user);

            return res.status(200).json({
                message: "Usuário removido com sucesso!"
            })

        }catch{
            return res.status(400).json({
                error: true,
                message: "Não foi possível remover o usuário do BD."
            })
        }
    }
}

module.exports = new UserController();