let nextId = 1;
const barbeiro = require("./barbeiro");

const model = (body, id = nextId++) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    barbeiro(barbeiro_id) &&
    preco.body > 0 &&
    duracao.body > 0
  ) {
    return {
      id,
      nome: body.nome,
      preco: preco.body,
      duracao: duracao.body,
      barbeiro_id,
    };
  }
};

module.exports = model;
