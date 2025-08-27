# Node Server Template

Ideia do projeto:

_"template de servidor Node.js com Express e TypeScript."_

Organizado com princípios de SOLID, Clean Architecture e DDD. Uma proposta de **base modular e escalável** para construção de APIs robustas, testáveis e de fácil manutenção.

## Motivo

Este projeto faz parte do meu portfólio.

Desenvolvi com foco no aprendizado e evolução como desenvolvedor, mas também pensando em entregar utilidade para quem quiser utilizá-lo.
Se você tiver qualquer feedback ficarei muito feliz em receber! Toda sugestão é muito bem-vinda para que eu continue melhorando como profissional.

Email: eduardo.silvamachado07@gmail.com

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/eduardo-machado-dev/)

## Começando

### Pré-requisitos

Para executar este projeto no modo de **desenvolvimento**, você precisará ter um ambiente básico com o Node.js 20+ e NPM 10+ instalado.

### Instalando

**Clonando Repositório**

```
$ git clone https://github.com/EduMachado07/node_server_template.git

$ cd node_server_template
```

**Instalando dependências**

```
$ yarn
```

_or_

```
$ npm install
```

**Executando servidor**

(OPCIONAL) Crie o arquivo .env e add a porta padrão:

```
$ echo PORT_SERVER=3333 >> .env
```

Com todas as dependências instaladas, e o ambiente configurado corretamente, agora você pode executar o servidor:

```
$ yarn dev
```

_or_

```
$ npm run dev
```

## Estrutura

```
src/
 ├── entities/              # Definição das entidades
 ├── providers/             # Interfaces serviços externos
    └── implementations/    # Implementação do serviço
 ├── repositories/          # Interfaces dos repositórios
    └── implementations/    # Implementação do serviço
 ├── useCases/
    └── Example/
        ├── Example_Controller.ts   # Controlador do caso de uso
        ├── Example_UseCase.ts      # Regra de negócio
        ├── Example_DTO.ts          # Tipos/DTOs
        ├── Example_UseCase.spec.ts # Teste unitário
        └── index.ts                # Exporta o módulo
 ├── app.ts               # Configuração do app
 ├── routes.ts            # Rotas da API
 └── server.ts            # Inicialização do servidor
.env                      # Variáveis de ambiente
package.json              # Dependências e scripts
tsconfig.json             # Configuração do TypeScript
```

- entities/  Ficam as entidades do domínio, classes ou tipos que representam os objetos centrais da sua aplicação, como User, Product, Order.
- providers/  Serviços externos ou integrações, como envio de e-mails, autenticação com terceiros, APIs externas, etc.
- repositories/ Define as interfaces e as implementações para acessar e manipular os dados (ex.: salvar, buscar e deletar no banco de dados).
- useCases/ Organiza os casos de uso da aplicação (também chamados de serviços ou interações do usuário).
  - Controller - recebe a requisição e chama o caso de uso.
  - UseCase - contém a regra de negócio principal.
  - DTO - define os tipos/estruturas esperadas de entrada e saída.
  - spec.ts - testes unitários desse caso de uso.
  - index.ts → facilita exportar/importar o caso de uso completo.
- app.ts - Onde configura o express (middlewares, body-parser, cookie-parser, etc.), mas não inicia o servidor.
- routes.ts - Centraliza as rotas do seu servidor, conectando cada endpoint HTTP aos respectivos controllers.
- server.ts - Arquivo responsável por de fato iniciar o servidor.

## Construído com

- [NodeJS](https://nodejs.org/en/)
- [express](https://expressjs.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

## Referências
Youtube - [Princípios SOLID em uma API REST com Node.js e TypeScript](https://www.youtube.com/watch?v=vAV4Vy4jfkc&t=79s)


