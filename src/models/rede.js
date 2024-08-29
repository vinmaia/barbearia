let nextId = 1
const user_id = require("./usuario")

const model = (body, id = nextId++) => {

    if (body.nome != undefined && 
        body.nome != "" && usuario.id(user_id)
    ) {
        return {
            id,
            nome: body.nome,
            user_id
        }
    }
}

module.exports = model