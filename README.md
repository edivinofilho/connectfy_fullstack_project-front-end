## Introdução ao Projeto:
Este projeto foi criado com o intuito de adicionar e gerenciar sua lista de contatos, armazenando seus contatos de forma segura e eficiente.

## Regras de Negócio:

Página inicial: 
- Onde o usuário fará o seu login. Caso não tenha uma conta, o usuário deverá clicar na frase "What? Not Registered yet, click here ;)" onde ele será direcionado para a página de registro.

Página de Registro:  
- Nesta página o usuário adicionará aos campos seus dados pessoais como nome, email, o cadastro de uma senha, a confirmação desta senha e seu número de telefone. Ao clicar no botão Registrar o usuário receberá uma confirmação de sucesso de seu cadastro ou quais campos ele ainda precisa preencher e será direcionado a página de Login. Caso o usuário já tenha uma conta e está nesta página, ele deve clicar na frase: "Already Register? Login here ;)" para retornar a página de Login.

Home Page: 
- Uma vez feito o login o usuário será direciona a página onde estarão listados todos seus contatos em ordem alfabética com base no primeiro nome do contato. Caso o usuário ainda não tenha nenhum contato ele receberá a mensagem: "No contacts yet? No worries, the world awaits". Caso já existam contatos cadastrados nesta página o usuário poderá procurar por um contato específico utilizando o search bar. No cabeçalho desta página estará em display o nome do usuário com os ícones para adicionar contatos, representado pelo sinal de adicção (+) e a opção de fazer o logout, o qual o levará a página de login novamente.

- Ao clicar no ícone para adicionar um contato, um modal irá aparecer na tela com os campos: nome completo, email e telefone. Ao adicionar todos os dados e clicar no botão Add Contact, o usuário receberá uma mensagem de sucesso na criação do contato e o modal irá fechar automaticamente. Caso falte o preenchimento de algum campo, uma mensagem de erro irá mostrar qual campo deve ser preenchido.

- Ao clicar em um contato já existente, o usuário será redirecionado a página deste contato onde o nome do contato deve aparecer no cabeçalho da página ao lado do botão de retornar a página home (onde estão listados seus contatos). Nesta página (Contact Page), o usuário poderá editar todos os dados do seu contato, menos a data em que este contato foi criado. 


## Casos de Uso:

## Dependências:
React + Vite

## Instruções de Uso:

## Contribuição:

## Licença:
Este projeto faz parte do curso Full Stack Developer da Kenzie Academy Brasil (www.kenzie.com.br). Todos os direitos e propriedade intelectual deste projeto pertencem à Kenzie Academy Brasil.
