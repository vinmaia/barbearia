let nextId = 1;
const barbearia = require("./barbearia");

const model = (body, id = nextId++) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    barbearia(barbearia_id) &&
    body.bio != ""
  ) {
    return {
      id,
      nome: body.nome,
      bio: body.bio,
      barbearia_id,
    };
  }
};

module.exports = model;
