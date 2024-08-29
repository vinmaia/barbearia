let nextId = 1
const rede_id = require("./rede")
const endereco = require("../middlewares/cep_endereco")
const cep_endereco = require("../middlewares/cep_endereco")

const model = (body, id = nextId++) => {
 let coordenadas = {latitude, longitude}

    if (body.nome != undefined && 
        body.nome != "" && rede.id(rede_id) &&
       cep_endereco(endereco) && 
       coordenadas
    ) {
        return {
            id,
            nome: body.nome,
            endereco,
            coordenadas,
            rede_id
        }
    }
}

module.exports = model