# Desafio Speedio

Esse é um projeto de teste técnico proposto pela Speedio. O teste consiste em desenvolver um encurtador de urls, tanto o server-side, quanto a interface.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/devgustavovasquez/challenge-speedio.git
```

Entre em cada um dos repositórios e instale as dependências. Eu utilizei o gerenciador `pnpm`, porém fique a vontade para usar npm ou yarn.

Só peço que use a versão do node 18.16.0.

```bash
  cd backend
  pnpm install

  cd frontend
  pnpm install
```

## Inicializando

Comando para rodar o Banco (backend)

```bash
  docker compose up -d
```

Comando para iniciar (os dois)

```bash
  pnpm dev
```

`DATABASE_URL=`postgres://prisma_speedio:DL47UPkHB9k8Zf7eUzdge6guQxPbduMW@dpg-ci5uj1p8g3n4q9ue5740-a.oregon-postgres.render.com/speedio_db

`JWT_SECRET=`341278041264fe436f4d027f4c66f195

## Vídeos

Acabei dividindo em 2 vídeos porque não sabia que era pago para poder baixar o vídeo e juntar apenas em 2.

#1 -> https://share.vidyard.com/watch/TrPUVoQLjguKnMqZXAcWMg?

#2 -> https://share.vidyard.com/watch/JJ4pU53sjtnZoo8JQXsj71?

Ponto de melhoria não citado nos vídeos: + testes.
Com certeza faltaram alguns testes e2e no backend.

Além de que eu também teria dedicado mais tempo para realizar testes no frontend.

## Stack utilizada

**Front-end:** Javascript, Vue, TailwindCSS, vue-router, pinia e axios

**Back-end:** Typescript, Express, Prisma, PostgreSQL, Zod, Cheerio, JWT e Jest.
