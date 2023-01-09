//importando biblioteca interna do NODE para mexer com a web
// const http = require("http");

// ===========================================================================================

//importando o express para subistituir a necessidade do HTTP
//const express = require('express');
//cont app = express();
//app.use(express.json());
const app = require("express")();
app.use(require("express").json());

// //importando aquivo router.js
// const rotas = require("./router");

//definição do servidor e da porta
//const servidor = "localhost";
const porta = "8000";
app.use(require("express").json());

//importar cada router que foi criado
const veiculoRouter = require("./src/Router/VeiculoRouter");
const clienteRouter = require("./src/Router/ClientesRouter");
const produtoRouter = require("./src/Router/ProdutosRouter");

// habilitar as novas rotas
app.use("/", veiculoRouter);
app.use("/", clienteRouter);
app.use("/", produtoRouter);

app.listen(porta, () => {
  console.log("API Rodando no endereço http://localhost:8000");
});

// ===========================================================================================

// //função que será executada assim que chegar uma requisisão
// async function recepcao(requicisao, response) {
//   //testando se a url foi definida no objrto de rotas criado acima
//   if (undefined == rotas[requicisao.url]) {
//     //caso não exista a rota, então encerra a request
//     response.writeHead(404); //gerando codigo de erro 404
//     return response.end();
//   }
//   //testando requisição definida no objeto de rotas
//   if (undefined == rotas[requicisao.url][requicisao.method]) {
//     response.writeHead(405);
//     return response.end();//gerando codigo de erro 405
//   }

//   //finalizando o processo com uma resposta
//   let resultado = await rotas[requicisao.url][requicisao.method]();

//   response.end(JSON.stringify(resultado));
// }

// //levantando o servidor
// http.createServer(recepcao).listen(porta, servidor);

// // no terminal escrever: node.js
// // NODEMON É PARA O SERVIDOR FICAR ESCUTANDO SEM PRECISAR DERRUBA-LO
// // npm install -g nodemon
// // subindo servidor nodemon
// //index.js
