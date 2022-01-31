const mongoose = require("mongoose");

class Connection{
    constructor(){
        this.dataBaseConnectionMongoDB();
    }

    dataBaseConnectionMongoDB(){
        this.mongoDBConnection = mongoose.connect("mongodb://localhost/formyup", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(()=> {
                console.log("Conexão com o mongo estabelecida com sucesso!");
            })
            .catch((err) => {
                console.log(`Erro ao tentar se conectar ao mongo: ${err}`);
            })
    }
}

module.exports = new Connection();