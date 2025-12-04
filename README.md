<h1 align="center">It's Too Delicious (DevBurguer)</h1>

<h3 align="center">Sistema de Delivery Fullstack - Hamburgueria</h3>

<br>

<p align="center">
  <a href="#art-sobre-o-projeto">Sobre o Projeto</a> | 
  <a href="#computer-tecnologias-usadas">Tecnologias Usadas</a> | 
  <a href="#package-como-rodar">Como Rodar</a>
</p>

<br>

# :art: Sobre o Projeto

Este é um projeto Fullstack robusto desenvolvido para simular a experiência real de uma hamburgueria digital. O sistema conecta clientes à cozinha em tempo real, gerenciando desde a escolha dos produtos até o status final da entrega.

O projeto utiliza uma **Arquitetura de Banco de Dados Híbrida** (SQL para usuários e NoSQL para pedidos) e possui uma área administrativa completa para gerenciamento dos pedidos.

<br>

## ✨ Features Principais

* **Autenticação Segura:** Login e cadastro de usuários com validação de token (JWT).
* **Catálogo Dinâmico:** Listagem de produtos com filtro interativo por categorias (Hambúrgueres, Bebidas, etc).
* **Carrinho Inteligente:** Adição e remoção de itens com cálculo automático de subtotal e taxas.
* **Dashboard Administrativo:**
    * Visualização de todos os pedidos em tempo real.
    * Alteração de Status (Realizado -> Em Preparação -> Pronto -> Entregue).
    * Cancelamento de pedidos.
* **Checkout:** Interface preparada para integração com pagamentos digitais.

# :computer: Tecnologias Usadas

### Front-end (Interface)
* **React** (Biblioteca de UI)
* **Styled-Components** (Estilização CSS-in-JS)
* **Material UI** (Componentes e Ícones)
* **React Hook Form + Yup** (Validação de formulários)
* **Stripe** (Integração de pagamentos)

### Back-end (API)
* **Node.js & Express** (Servidor)
* **Sequelize** (PostgreSQL - Dados Relacionais)
* **Mongoose** (MongoDB - Dados de Pedidos)
* **Docker** (Containerização dos Bancos)

# :package: Como Rodar o Projeto Localmente

Este projeto é um Monorepo (contém API e Interface). Siga os passos abaixo para rodar em sua máquina.

1.  **Clone o repositório:**
    ```sh
    git clone [https://github.com/EltonVitorettiJr/Its-Too-Delicious-FullStack.git](https://github.com/EltonVitorettiJr/Its-Too-Delicious-FullStack.git)
    cd Its-Too-Delicious-FullStack
    ```

2.  **Configure o Banco de Dados:**
    Certifique-se de ter o **PostgreSQL** e o **MongoDB** rodando (localmente ou via Docker).

3.  **Rodando a API (Back-end):**
    ```sh
    cd api
    yarn install
    
    # Crie um arquivo .env na pasta 'api' com suas variáveis (MONGO_URL, SECRET_KEY, ETC)
    
    yarn dev
    ```

4.  **Rodando a Interface (Front-end):**
    Abra um novo terminal na pasta raiz do projeto:
    ```sh
    cd interface
    yarn install
    yarn dev
    ```

5.  **Acesse:**
    O Front-end estará disponível em `http://localhost:5173` e a API em `http://localhost:3000`.

## 📦 Configuração de Variáveis (.env)

Para o projeto funcionar corretamente, você precisa criar um arquivo `.env` dentro da pasta `api` com as seguintes chaves:

```env
MONGO_URL=sua_url_do_mongo
POSTGRES_URL=sua_url_do_postgres
PORT=3000
SECRET_KEY=sua_chave_secreta_para_jwt
STRIPE_SECRET_KEY=sua_chave_do_stripe (opcional)
```

# :bug: Problemas

Sinta-se à vontade para registrar problemas caso encontre bugs ou tenha sugestões de melhoria!

<p align="center"> Feito com 💜 por <strong>Elton Vitoretti Jr</strong> sob tutoria do DevClub.

Entre em contato: <a href="https://www.google.com/search?q=https://www.linkedin.com/in/elton-vitoretti-jr">LinkedIn</a> </p>
