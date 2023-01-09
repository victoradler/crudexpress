const app = require("express").Router();
const produtoController = require("../controller/produtoController");

//Listando todos os produtos
app.get("/produtos", async (req, res) => {
  let dados = await produtoController.listar();

  res.send(dados);
});

//Cadastrando produtos
app.post("/produtos", async (req, res) => {
  let dados = await produtoController.cadastrar(req.body);
  res.send(201);
});

//Deletando produtos
app.delete("/produtos/:id", async (req, res) => {
  await produtoController.excluir(req.params.id);

  res.send(204);
});

module.exports = app;
