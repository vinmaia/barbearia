/*Cliente:
 - nome
 - telefone
 - email
 - senha?*/

const db = [];
let nextId = 1;

const model = (body, id = nextId++) => {
  const telefone = body.telefone
    .replaceAll("-", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "");

    const soNumero = true

    telefone.forEach(el => {
        if(isNaN(Number(el))) {
            soNumero = false
        } 
    })
  if (
    body.nome != undefined &&
    body.nome != "" &&
    body.telefone != undefined &&
    telefone != "" &&
    body.email != undefined &&
    body.email != "" &&
    body.senha != undefined &&
    body.senha != "" &&
    telefone.length >= 11 &&
    body.email.includes("@") &&
    telefone.length <= 12
  ) {
    return {
      id,
      nome: body.nome,
      telefone: body.telefone,
      email: body.email,
      senha: body.senha,
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    db.push(novo);
    return 201;
  }

  return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
  const index = db.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    db[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = db.findIndex((el) => el.id == id);

  if (index != -1) {
    db.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
