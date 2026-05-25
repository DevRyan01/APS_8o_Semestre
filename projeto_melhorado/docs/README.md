# Documentação do Projeto CODE_RECICLAGEM

## Objetivo
Este projeto apresenta um site informativo sobre reciclagem, com foco em conscientização ambiental, navegação clara e organização adequada dos arquivos.

O site usa:
- HTML semântico para cada página.
- CSS externo para estilo geral.
- JavaScript externo para interatividade básica.
- Estrutura de pastas organizada para facilitar manutenção.

## O que foi feito

### Página inicial (`index.html`)
- Estrutura com `<header>`, `<main>` e `<footer>`.
- Menu de navegação no topo com links para todas as páginas.
- Seção de boas-vindas com cards informativos.
- Inclusão de embed de vídeo do YouTube Shorts para conteúdo educativo.
- Tabela de materiais recicláveis mostrando ações para cada tipo de resíduo.

### Página de conteúdo (`conteudo.html`)
- Texto sobre a importância da reciclagem para o meio ambiente.
- Lista ordenada dos tipos de resíduos e seus impactos.
- Uso de elementos semânticos como `<strong>`, `<em>`, `<u>` e `<mark>`.
- Imagem local `Group_RE.jpg` usada para ilustrar equipe e projeto.

### Página de contato (`contato.html`)
- Formulário com campos relevantes para contato.
- Campos incluídos: nome completo, data de nascimento, telefone, e-mail, sexo, escolaridade e mensagem.
- Checkbox para receber novidades.
- Validação mínima e alerta de envio via JavaScript.

### Página Sobre o Grupo (`sobre.html`)
- Texto sobre a equipe e a missão do grupo.
- Fotos individuais dos integrantes Ryan e Felipe.
- Descrições dos papéis de cada integrante no projeto.

## Arquitetura de pastas

A organização do projeto é a seguinte:

```
CODE_RECICLAGEM/
├── index.html
├── contato.html
├── conteudo.html
├── sobre.html
├── css/
│   └── style.css
├── js/
│   └── scripts.js
├── assets/
│   ├── img/
│   │   ├── Foto_FELIPE.jpeg
│   │   ├── Foto_RYAN.jpeg
│   │   ├── Group_RE.jpg
│   │   ├── group.svg
│   │   └── recycle.svg
│   └── video/
└── docs/
    ├── README.md
    └── presentation-script.md
```

## Tecnologias usadas
- HTML5
- CSS3
- JavaScript
- YouTube embed para vídeo educativo

## Interatividade JavaScript
O arquivo `js/scripts.js` contém:

- `initPage()` adiciona mensagem de boas-vindas na página inicial.
- `submitForm()` valida o nome e mostra alerta de envio.
- `cardHover()` aplica sombra rápida aos cartões.
- `showTypingHint()` altera a mensagem do rodapé enquanto digita.

## Como usar o projeto
1. Abra `index.html` em um navegador moderno.
2. Use o menu para navegar entre as páginas.
3. Assista ao vídeo educativo embutido na página inicial.
4. Vá para `conteudo.html` para aprender sobre tipos de resíduos.
5. Use `contato.html` para testar o formulário.
6. Consulte `sobre.html` para ver os integrantes e a missão do grupo.

## Observações importantes
- O vídeo é carregado via `iframe` do YouTube, o que é a forma correta para conteúdo externo.
- As imagens dos integrantes estão no diretório `assets/img`.
- A pasta `assets/video` está disponível para adicionar vídeos locais no futuro.
