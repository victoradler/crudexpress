const app = require("express").Router();
const veiculoController = require("../controller/veiculoController");

// essa função sera executado quando a função listar for chamada
app.get("/veiculos", async (req, res) => {
  let dados = await veiculoController.listar();

  res.send(dados);
});

//trazendo somente um resultado
app.get("/veiculos/:id", async (req, res) => {
  let dados = await veiculoController.buscarUm(req.params.id);

  res.send(dados);
});

//cadastrando resultados no banco de dados.
app.post("/veiculos", async (req, res) => {
  await veiculoController.cadastrar(req.body);

  res.send(201);
});

//trazendo das as informações da tabela
app.put("/veiculos/:id", async (req, res) => {
  await veiculoController.editar(req.body, req.params.id);

  res.send(req.body);
});

//deletando o resultado
app.delete("/veiculos/:id", async (req, res) => {
  await veiculoController.excluir(req.params.id);

  res.send(204);
});

module.exports = app;
