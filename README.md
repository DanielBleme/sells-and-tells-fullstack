 # Projeto Sells & Tells

## Links do Projeto

* **Protótipo no Figma:** [[Acessar Figma](https://www.figma.com/seu-link-aqui)](https://www.figma.com/make/vcF9xv49TbsRO1UEw7gqvN/Loja-Virtual-Sells-and-Tells?t=dTRsUmrzhF6axzDu-20&fullscreen=1&preview-route=%2F%23historia)
* **Relatório Técnico (SBC):** [SBC-TrabalhoPratico.pdf](https://github.com/user-attachments/files/35189150/SBC-TrabalhoPratico.pdf)

## Tecnologias

* **Front-end:** React, Tailwind CSS, Lucide React
* **Back-end:** Node.js, Express, mssql
* **Banco de Dados:** SQL Server

## Como rodar o projeto

### 1. Banco de Dados
Banco rodando na tabela `Produto` no SQL Server e ajuste o usuário e senha no arquivo `dbconfig.js`.

### 2. API (Back-end)
Na pasta raiz, instale as dependências e inicie o servidor:
```bash
npm install
node api.js
```
A API vai rodar em `http://localhost:8090`.

### 3. Front-end
Em outro terminal, entre na pasta do React e inicie a aplicação:
```bash
cd sells-and-tells
npm install
npm start
```
O projeto abrirá em `http://localhost:3000`.s_tells.md…]()
