# Tarefa - Exibição de Filmes com React e TypeScript 🎬

Este é um projeto de treinamento em desenvolvimento web onde o objetivo é consumir uma API ou um arquivo **JSON** contendo informações sobre filmes e exibir essas informações em uma interface simples utilizando **React** e **TypeScript**. A tarefa foi realizada no contexto do programa de capacitação **3035Teach** da **3035 Tech**, com foco no aprendizado sobre consumo de APIs e manipulação de dados em formato JSON.

Acesse o projeto [aqui](https://felipecardosovargas.github.io/terceira-tarefa/).

## Descrição 📋

O projeto tem como objetivo consumir um arquivo JSON contendo informações sobre filmes e exibi-las de forma interativa. Além disso, agora o projeto inclui um parâmetro `checked`, que representa se um filme foi selecionado ou não. Quando o usuário clica no checkbox, uma mensagem será exibida informando o nome do filme selecionado. O projeto inclui as seguintes funcionalidades:

- Exibição do **nome** e **poster** de cada filme.
- Exibição de uma **descrição** curta para cada filme.
- Um **checkbox** para cada filme, onde, ao ser marcado, uma mensagem será exibida com o nome do filme.
- Layout simples e responsivo para visualização em diferentes dispositivos.

## Tecnologias Utilizadas 🛠️

- **React**: Biblioteca JavaScript para construção de interfaces de usuário. ⚛️
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código. 📜
- **Vite**: Ferramenta de build rápida para projetos modernos. 🚀
- **CSS**: Estilização básica do componente. 🎨

## Estrutura de Diretórios 📂

A estrutura de diretórios do projeto é organizada da seguinte maneira:

```
Tarefa_Filmes/
│
├── public/               # Arquivos públicos (ex.: index.html)
├── src/
│   ├── App.tsx           # Componente principal da aplicação
│   ├── main.tsx          # Ponto de entrada da aplicação
│   └── styles.css        # Estilos globais
├── package.json          # Dependências e scripts do projeto
├── tsconfig.json         # Configuração do TypeScript
└── README.md             # Arquivo de documentação do projeto
```

### Detalhes

- **`MovieCard.tsx`**: Componente React que recebe as informações de cada filme e as exibe.
- **`App.tsx`**: Componente principal que carrega os filmes e os renderiza utilizando o componente `MovieCard`.
- **`main.tsx`**: Ponto de entrada da aplicação, onde o React é renderizado no DOM.
- **`styles.css`**: Arquivo de estilos CSS para a aplicação.
- **`tsconfig.json`**: Configuração do TypeScript para garantir tipagem estática.

## Aprendizados 📚

Durante o desenvolvimento deste projeto, pude praticar e consolidar os seguintes conceitos:

- **Consumo de JSON/API**: Como consumir dados de um arquivo JSON ou API externa.
- **Componentes React**: Criação e utilização de componentes funcionais.
- **State (`useState`)**: Uso de hooks para gerenciar dados do componente.
- **Manipulação de Eventos**: Trabalhar com interações e manipulação de eventos, como o checkbox.
- **Estilização CSS**: Como estilizar componentes de forma simples.

---

Agora você pode acessar a tarefa no [link do GitHub](https://felipecardosovargas.github.io/terceira-tarefa/) para ver o projeto funcionando!
