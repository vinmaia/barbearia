const axios = require("axios")

const cep_endereco = (req, res, next) => {
axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`).then(resposta => {
    req.body.endereco = resposta.data
    delete req.body.cep
    next()
})
}

module.exports = cep_endereco