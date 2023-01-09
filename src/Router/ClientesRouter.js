const app = require("express").Router();
const clienteController = require("../controller/clienteController");

//trazendo todos os resultados
app.get("/cliente", async (req, res) => {
  let dados = await clienteController.listar();
  res.send(dados);
});

//trazendo somente um resultado
app.get("/cliente/:id", async (req, res) => {
  let dados = await clienteController.buscarUm(req.params.id);

  res.send(dados);
});

//trazendo o cliente daquele veiculo
app.get("/cliente/:id/veiculos", async (req, res) => {
  res.send("testando...");
});

module.exports = app;
