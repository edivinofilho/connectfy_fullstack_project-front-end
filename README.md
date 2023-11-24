## Introdução ao Projeto:
Este projeto foi criado com o intuito de criar e gerenciar sua lista de contatos, armazenando seus contatos de forma segura e eficiente.

## Passos para clonar e executar este projeto:
### Passo 1: Baixar o Código Fonte

*Clone o Repositório:*

No canto superior direito do repositório, clique no botão "Code".
Copie o link fornecido.

*Abra o Terminal:*
Abra o terminal ou prompt de comando no seu computador.

*Navegue até o Diretório de Destino:*
Use o comando cd para navegar até o diretório onde você deseja armazenar o projeto.

*Clone o Repositório:*
Execute o comando git clone seguido do link que você copiou.
<pre>
 git clone link_do_repositorio_copiado
</pre>

### Passo 2: Instalar as Dependências
Navegue até o Diretório do Projeto:

Use o comando cd para entrar no diretório recém-clonado.
<pre>
 cd connectfy
</pre>

*Instale as Dependências:*
Execute o comando npm install para instalar todas as dependências listadas no arquivo package.json.
<pre>
 npm install
</pre>

### Passo 3: Executar a Aplicação em Modo de Desenvolvimento
Execute o Comando de Desenvolvimento:
Use o comando fornecido no arquivo package.json para iniciar a aplicação em modo de desenvolvimento.
<pre>
 npm run dev
</pre>

*Acesse a Aplicação:*
Abra seu navegador e vá para o endereço indicado (http://localhost:5173/).

### Passo 4: Explorar a Aplicação:
Agora, a aplicação deve estar rodando localmente em seu computador. Explore-a no navegador e veja como tudo funciona!

## Tecnologias utilisadas neste projeto:
- **react (Versão 18.2.0)**
    Descrição: Biblioteca principal do React para construção de interfaces de usuário. 

- **@hookform/resolvers (Versão 3.3.2)**
    Descrição: Resolvedores para o React Hook Form, uma biblioteca popular para gerenciar formulários em React.
<pre>
  npm install @hookform/resolvers
</pre>

- **axios (Versão 1.6.2)**
    Descrição: Um cliente HTTP baseado em promessas para o navegador e o Node.js.
<pre>
 npm install axios
</pre>

- **react-hook-form (Versão 7.48.2)**
    Descrição: Biblioteca para gerenciar formulários em React.
<pre>
 npm install react-hook-form
</pre>

- **react-router-dom (Versão 6.18.0)**
    Descrição: Biblioteca para navegação e roteamento em aplicativos React.
<pre>
 npm install react-router-dom
</pre>

- **react-toastify (Versão 9.1.3)**
    Descrição: Biblioteca para exibir notificações de toasts em React.
<pre>
 npm install react-toastify
</pre>

- **styled-components (Versão 6.1.1)**
    Descrição: Biblioteca para estilizar componentes React com estilos baseados em componentes.
<pre>
 npm install styled-components
</pre>

- **zod (Versão 3.22.4)**
    Descrição: Biblioteca de validação de esquemas para JavaScript/TypeScript.
<pre>
 npm install zod
</pre>

 - **vite (Versão 4.4.5)**
    Descrição: Estrutura de desenvolvimento rápida para projetos web modernos.
<pre>
 npm install vite
</pre>

### Para instalar todas as dependências listadas acima, basta executar o seguinte comando na raiz do projeto:
<pre>
 npm install 
</pre>

Isso instalará tanto as dependências de produção quanto as dependências de desenvolvimento listadas no arquivo package.json.

## Layout da Aplicação:
https://www.canva.com/design/DAF0DV2LeFU/oM00lvRFr-OwT2721VZ6KQ/edit?utm_content=DAF0DV2LeFU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton


## Instruções de Uso:
Página inicial: 
- Onde o usuário fará o seu login. Caso não tenha uma conta, o usuário deverá clicar na frase "What? Not Registered yet, click here ;)" onde ele será direcionado para a página de registro.

Página de Registro:  
- Nesta página o usuário adicionará aos campos seus dados pessoais como nome, email, o cadastro de uma senha, a confirmação desta senha e seu número de telefone. Ao clicar no botão Registrar o usuário receberá uma confirmação de sucesso de seu cadastro ou quais campos ele ainda precisa preencher e será direcionado a página de Login. Caso o usuário já tenha uma conta e está nesta página, ele deve clicar na frase: "Already Register? Login here ;)" para retornar a página de Login.
![logreg pages](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy/assets/103902774/381e0745-20a4-4432-bf93-e3ccf76e0636)

Home Page: 
- Uma vez feito o login o usuário será direciona a página onde estarão listados todos seus contatos em ordem alfabética com base no primeiro nome do contato. Caso o usuário ainda não tenha nenhum contato ele receberá a mensagem: "No contacts yet? No worries, the world awaits". Caso já existam contatos cadastrados nesta página, o usuário poderá procurar por um contato específico utilizando o search bar. No cabeçalho desta página estará em display o nome do usuário com os ícones para editar os seus dados, representado por um lápis, adicionar contatos, representado pelo sinal de adicção (+) e a opção de fazer o logout, o qual o levará a página de login novamente.
![homeadd pages](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy/assets/103902774/2c4fb38b-1ec5-4b3e-90f9-a1b6243bd1ae)

Desde a Home Page:
- Ao clicar no ícone de edição dos seus dados (lápis), o usuário será direcionado a página onde conterá todas suas informaçãoes e também onde poderá alterar seus dados ou deletar sua conta. Nesta página haverá um ícone para retornar a página anterior(home). Caso o usuário deseje atualizar suas informações é só clicar no ícone de edição (lápis), e um modal irá abrir já com seus dados atuais, onde poderão ser alterados e salvos.

- Ao clicar no ícone para adicionar um contato, um modal irá aparecer na tela com os campos: nome completo, email e telefone. Ao adicionar todos os dados e clicar no botão Add Contact, o usuário receberá uma mensagem de sucesso na criação do contato e o modal irá fechar automaticamente.

- Ao clicar em um contato já existente, o usuário será redirecionado a página deste contato onde o nome do contato deve aparecer no cabeçalho da página ao lado do botão de retornar a página home (onde estão listados seus contatos). Na página do contato, o usuário poderá editar todos os dados do seu contato, menos a data em que este contato foi criado.
![contact-add pages](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy/assets/103902774/bc15f04b-5fb3-4fd4-97ad-e6147076bd2a)

Voltando a Home Page, o usuário poderá fazer o logout desde o ícone no canto direito superior da tela.

## Licença:
Este projeto faz parte do curso Full Stack Developer da Kenzie Academy Brasil (www.kenzie.com.br). Todos os direitos e propriedade intelectual deste projeto pertencem à Kenzie Academy Brasil.
