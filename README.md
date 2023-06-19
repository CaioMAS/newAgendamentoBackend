# Documentação - Projeto de Agendamento de Serviços

Esta documentação fornece informações completas sobre o projeto de agendamento de serviços desenvolvido em linguagem de modelagem do banco de dados Prisma. Aqui você encontrará detalhes sobre os modelos, suas estruturas, relacionamentos e instruções sobre como utilizar e configurar o projeto.

## Sumário
- Modelos
  - Admin
  - Schedule
  - Professional
  - Service
 
- Configuração
  - Pré-requisitos
  - Instalação
  - Configuração do Banco de Dados

- Contribuição
- Suporte
- Licença

## Modelos

O projeto é composto por quatro modelos principais: Admin, Schedule, Professional e Service. A seguir, são apresentados detalhes sobre cada um deles.

## Admin

O modelo Admin representa os administradores do sistema.

Atributos:

- **id** (String, obrigatório): Identificador único do administrador.
- **name** (String, opcional): Nome do administrador.
- **email** (String, opcional e único): Endereço de e-mail do administrador.
- **password** (String, obrigatório): Senha do administrador.
- Professional (relação opcional): Relação com os profissionais associados ao administrador.

## Schedule

O modelo Schedule representa os agendamentos de serviços.

Atributos:

- **id** (String, obrigatório): Identificador único do agendamento.
- **professional_id** (String, opcional): Identificador do profissional associado ao agendamento.
- **service** (String, opcional): Descrição do serviço agendado.
- **date** (DateTime, opcional): Data do agendamento.
- **time** (String, opcional): Hora do agendamento.
- **client_name** (String, opcional): Nome do cliente.
- **client_telephone** (String, opcional): Telefone do cliente.
- **professional** (relação opcional): Relação com o profissional associado ao agendamento.

## Professional

O modelo Professional representa os profissionais cadastrados no sistema.

Atributos:

- **id** (String, obrigatório): Identificador único do profissional.
- **professional_name** (String, opcional): Nome do profissional.
- **services** (relação opcional): Relação com os serviços oferecidos pelo profissional.
- **photo** (String, opcional): URL da foto do profissional.
- **adminId** (String, opcional): Identificador do administrador associado ao profissional.
- **admin** (relação opcional): Relação com o administrador associado ao profissional.
- **Schedule** (relação opcional): Relação com os agendamentos associados ao profissional.
 
## Service

O modelo Service representa os serviços oferecidos pelos profissionais.

Atributos:

- **id** (String, obrigatório): Identificador único do serviço.
- **type** (String, obrigatório): Tipo de serviço.
- **value** (Float, obrigatório): Valor do serviço.
- **professional** (relação obrigatória): Relação com o profissional associado ao serviço.
- **professionalId** (String, obrigatório): Identificador do profissional associado ao serviço.


## Configuração

Esta seção fornece informações sobre os pré-requisitos, instalação e configuração do banco de dados necessário para executar o projeto.

## Pré-requisitos

Antes de prosseguir, certifique-se de ter os seguintes pré-requisitos instalados:

- Node.js (versão 12 ou superior)
- Gerenciador de pacotes npm ou Yarn


## Instalação

Siga os passos abaixo para instalar e configurar o projeto:

1 - Clone este repositório em sua máquina local:
git clone https://github.com/seu-usuario/nome-do-repositorio.git

2 - Navegue até o diretório do projeto:
cd nome-do-repositorio

3 - Instale as dependências do projeto:
npm install
ou
yarn install

## Configuração do Banco de Dados

O projeto utiliza o banco de dados Prisma. Siga as instruções abaixo para configurar o banco de dados:

1 - Crie um arquivo chamado **.env** na raiz do projeto e defina as seguintes variáveis de ambiente:
DATABASE_URL="postgresql://usuario:senha@localhost:3306/nome-do-banco"
Substitua **usuario, senha e nome-do-banco** pelas informações corretas do seu banco de dados.

2 - Execute o comando abaixo para gerar as migrações do banco de dados:
npx prisma migrate dev
ou
yarn prisma migrate dev

Isso criará as tabelas necessárias no banco de dados.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as etapas abaixo:

1 - Fork este repositório.

2 - Crie uma branch com sua feature ou correção de bug: ***git checkout -b minha-feature.**

3 - Faça as alterações necessárias e adicione os devidos testes.

4 - Commit suas mudanças: **git commit -m 'Minha nova feature'.**

5 - Push para a branch criada: **git push origin minha-feature.**

6 - Envie um Pull Request.

## Suporte

Se você tiver alguma dúvida ou precisar de suporte, por favor entre em contato conosco por meio das issues do GitHub.

## Licença

Este projeto está licenciado sob a **MIT License.**

