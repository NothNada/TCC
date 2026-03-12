## Back-End do projeto

O backend do projeto utiliza Node.JS com express, o Express é uma biblioteca do node para lidar com rotas na web

### Estrutura do Back-End

A estrutura do back-end está organizada como qualquer projeto profissional, contendo:

- **Database**
  Responsável por criar e manter a **conexão com o banco de dados**. Normalmente exporta uma instância que o resto da aplicação usa para executar queries.

- **Models**
  Representam as **tabelas do banco**. Contêm funções que fazem consultas (SELECT, INSERT, UPDATE, DELETE) e retornam os dados.

- **Services**
  Camada onde fica a **lógica de negócio da aplicação**. Aqui entram validações, regras e processamento antes ou depois de acessar o banco.

- **Controllers**
  Recebem as **requisições HTTP**, chamam os services necessários e retornam a **resposta para o cliente** (JSON, status code, etc).

- **Routes**
  Definem os **endpoints da API** e conectam cada rota a um controller específico.

- **Server**
  Arquivo principal que **inicia o servidor**, configura middlewares e registra as rotas da aplicação.

---

### Caminho da requisição

```
Cliente (HTTP request)
        ↓
Routes
        ↓
Controllers
        ↓
Services
        ↓
Models
        ↓
Database
        ↓
Resposta volta pelo mesmo caminho
```





