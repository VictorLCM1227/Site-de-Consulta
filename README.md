# Site de Consulta

Sistema web de agendamento de consultas desenvolvido como projeto de estudo em desenvolvimento de software.

O projeto está sendo construído de forma incremental, começando por uma agenda simples e evoluindo gradualmente para um sistema com persistência de dados e backend.

## V1 — Agenda de Consultas

A primeira versão do projeto tem como objetivo desenvolver o funcionamento básico de uma agenda de consultas.

### Funcionalidades

* Exibição dos horários disponíveis.
* Identificação dos horários como `Livre` ou `Ocupado`.
* Seleção de um horário.
* Exibição do horário selecionado.
* Agendamento de uma consulta.
* Alteração do status do horário de `Livre` para `Ocupado`.
* Verificação de horários ocupados.
* Aviso ao tentar agendar sem selecionar um horário.

Nesta versão, os dados ainda são manipulados apenas no navegador. Portanto, os agendamentos não são armazenados permanentemente.

## Tecnologias

* HTML5
* CSS3
* JavaScript
* Python

## V2 — Persistência dos dados

O principal objetivo da V2 será fazer com que os dados dos agendamentos sejam **salvos de forma permanente**.

Atualmente, ao atualizar a página, os horários voltam ao estado inicial. Na V2, quero implementar um sistema capaz de armazenar os agendamentos e recuperar essas informações posteriormente.

### Planejamento da V2

* Implementar o backend da aplicação.
* Utilizar Flask.
* Criar uma forma de armazenamento dos agendamentos.
* Salvar os horários ocupados.
* Recuperar os dados quando a página for carregada.
* Integrar o JavaScript com o backend.

## Roadmap

* [x] V1 — Criar agenda básica
* [x] V1 — Selecionar horários
* [x] V1 — Agendar consultas
* [x] V1 — Alterar horário para ocupado
* [ ] V2 — Salvar os dados
* [ ] V2 — Recuperar os agendamentos
* [ ] V2 — Integrar frontend e backend
* [ ] V3 — Sistema de usuários e login
* [ ] V4 — Banco de dados
* [ ] V5 — Melhorias na interface

## Objetivo

Este projeto está sendo desenvolvido para praticar e consolidar conhecimentos de desenvolvimento web.

A proposta é começar com uma versão simples e funcional e evoluir o sistema gradualmente, adicionando novas tecnologias e funcionalidades conforme o aprendizado.

## Status

**V1 concluída — Agenda básica funcionando.**

**Próximo objetivo: V2 — Persistência dos dados.**
