const database = require("../connection/databaseConnection");

async function listar() {
  let sql = "SELECT * FROM tb_cliente";
  return await database.excecutarBanco(sql);
}

function cadastrar() {
  return "cadastrando Clientes";
}

//Buscar somente um select no banco de dados.
async function buscarUm(id) {
  let sql = "SELECT * FROM tb_cliente WHERE id=" + id;

  let resultado = await database.excecutarBanco(sql);

  return resultado[0];
}

//editar todos os elementos do banco de dados
async function editar({ nome, cpf, email }, id) {
  let sql = `UPDATE db_veiculos SET nome'${nome}', cpf'${cpf}', email'${email}' WHERE id=${id}`;

  await database.excecutarBanco(sql);
}

module.exports = {
  listar,
  cadastrar,
  editar,
  buscarUm,
};
