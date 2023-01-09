## Tecnologias

Node Js.
Express.js
Maria DB

## Instalação

Para baixar a aplicação execute o seguinte comando em seu terminal:
`git clone https://github.com.br/`

Após a aplicação, entre no diretorio dela atraves do terminal execute:

- `npm install`
- `npm start`

## Configuração

É necessario configurar as credencias do banco de dados.

=====

## Estrutura do banco de dados

Acesse o cliente de terminal do se banco de dados

-> Execute os comandos que estão no arquivo `/db.sql`;

## Credenciais

Abra o arquivo que se encontra no caminha `/databaseConnection` e edit as seguintes linhas de acordo com suas credenciais co banco:

```js
{
    host: 'localhost',
    user: 'root',
    password: '1234',
    database:'fs06_teste'
}
```

## Executar o projeto, no diretorio da aplicação através do terminal execute:

`nodemon index.js` ou `node index.js`

Sua api estará disponivel nos seguintes endereços:
http://localhost:8000/veiculos
http://localhost:8000/clientes
