<h1 align="center">
  <img alt="GoBarber" title="gobarber" src=".github/logo.svg" width="200px" />
</h1>

<h3 align="center">
  GoBarber: back-end, front-end web e mobile
</h3>

<p align = "center">
<a href="https://www.codefactor.io/repository/github/hugo-marcelo/gobarber-ts"><img src="https://www.codefactor.io/repository/github/hugo-marcelo/gobarber-ts/badge" alt="CodeFactor" /></a>
<img alt = "Última confirmação do Github" src = "https://img.shields.io/github/last-commit/hugo-marcelo/gobarber-ts">
<img alt = "Idioma principal do GitHub" src = "https://img.shields.io/github/languages/top/hugo-marcelo/gobarber-ts">
<img alt = "GitHub" src = "https://img.shields.io/github/license/hugo-marcelo/gobarber-ts.svg">
<a href="https://www.codacy.com/manual/hugo-marcelo/gobarber-ts?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hugo-marcelo/gobarber-ts&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/147d0b2836734c79b7ee5ea035f065b4"/></a>
</p>

## :gear: Back-end

### :information_source: Instruções Back-end

#### :whale: Executando com Docker Compose

```bash
# instalar os contâineres da API, PostgreSQL e Redis
docker-compose up -d
```

#### :whale: Executando com Docker localmente

```bash
# instalar PostgreSQL - Banco de dados principal
docker run --name gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11

# instalar Redis - Banco de dados para filas
docker run --name redis-gobarber -p 6379:6379 -d -t redis:alpine

# instalar os pacotes e dependências
yarn
```

Faça uma cópia do arquivo .env.example, renomeie para .env e altere as variáveis de acordo com o seu ambiente.

```bash

# criar estrutura do banco de dados Postgres
yarn sequelize db:migrate

# povoar o banco de dados
yarn sequelize db:seed:all

# iniciar servidor da aplicação
yarn dev

# executar os testes
yarn test

```

---

## :computer: Front-end

### :information_source: Instruções Front-end

```bash
#instalar os pacotes e dependências
yarn

# iniciar a aplicação web
yarn start
```

---

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## :clap: Obrigado

[Rocketseat](https://rocketseat.com.br/) pelo bootcamp!
