# Ledger Tec FullStack NodeJS e ReactJS
Desafio FullStack NodeJS e ReactJS para o processo seletivo da Ledger Tec

## Objetivo

Criar um sistema de cadastro de produtos tendo como back-end uma REST API em Express (NodeJS) utilizando o banco de dados SQLITE e como front-end uma aplicação de cadastro de produtos em ReactJS

- Criação do endpoint de produto com as seguintes operações:
  - Listar produtos
  - Exibir produto
  - Adicionar produto
  - Editar produto
  - Apagar produto
  
- Criar uma aplicação ReactJS para consumir a API capaz de fazer todas operações

## Requisitos

- Ter o `node` e o `yarn` instalados em sua máquina.

## Antes de tudo clone esse repositório

```bash
git clone https://github.com/Rosivaldo-Lucas/LedgerTec-FullStack-NodeJS.git
```

## Como executar o servidor

- Acesse a pasta do `backend`

```bash
cd backend
```

- Instale as dependências com o comando:

```bash
yarn
```

- Com o `yarn` inicie o servidor:

```bash
yarn dev
```

Pronto! O servidor com a `API` está rodando localmente na sua máquina em `http://localhost:3333`. O `endpoint` para o recurso de `produtos` é `http://localhost:3333/api/produtos`.

## Como executar o sistema web

- Acesse a pasta do `frontend`

```bash
cd frontend
```

- Instale as dependências com o comando:

```bash
yarn
```

- Com o `yarn` inicie o sistema:

```bash
yarn start
```

Pronto! O sistema com a `API` e o `FrontEnd` está rodando localmente na sua máquina em `http://localhost:3333` e `http://localhost:3000` respectivamente.

---

`Rosivaldo Lucas, estudante de Engenharia de Computação - UFPB`
