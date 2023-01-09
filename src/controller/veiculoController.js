const database = require("../connection/databaseConnection");

async function listar() {
  //let sql = "SELECT * FROM db_veiculos";
  let sql = ` SELECT vec.*, cli.nome AS cliente FROM  db_veiculos vec INNER JOIN tb_cliente cli ON vec.cliente_id = cli.id `;
  return await database.excecutarBanco(sql);
  //selecione todos os dados da tabela veiculo com os dados da tabela cliente
}

async function cadastrar({ nome, modelo, ano }) {
  let sql = `INSERT INTO db_veiculos (nome, modelo, ano)
             VALUES ('${nome}', '${modelo}', '${ano}')`;

  await database.excecutarBanco(sql);
}

//editar todos os elementos do banco de dados
async function editar({ nome, modelo, ano }, id) {
  let sql = `UPDATE db_veiculos SET nome'${nome}', modelo'${modelo}', ano'${ano}' WHERE id=${id}`;

  await database.excecutarBanco(sql);
}

async function excluir(id) {
  let sql = "DELETE FROM db_veiculos WHERE id=" + id;

  await database.excecutarBanco(sql);
}

//Buscar somente um select no banco de dados.
async function buscarUm(id) {
  let sql = "SELECT * FROM db_veiculos WHERE id=" + id;

  let resultado = await database.excecutarBanco(sql);

  return resultado[0];
}

module.exports = {
  listar,
  cadastrar,
  editar,
  excluir,
  buscarUm,
};
