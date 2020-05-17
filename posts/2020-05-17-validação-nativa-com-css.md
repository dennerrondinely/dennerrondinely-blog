---
title: Validação nativa com CSS
description: Melhore a validação nativa de formulário HTML5 com  CSS!
date: 2020-05-17T01:44:39.000Z
image: assets/img/captura-de-tela_20200517134636.jpg
category: css
background: "#2DA0C3"
---
A validação do formulário é feita na maioria das vezes com HTML nativo ou com JavaScript. E se quiser uma validação mais sofisticada com certeza optará por usar javascript..

Durante o desenvolvimento de um formulário de cadastro para uma aplicação onde eu trabalho, me deparei com necessidade de informar ao usuário que o campo era invalido e para isso sem inserir um elemento html novo na tela e sem escrever mais javascript, foi então que que fui buscar um solução via CSS.

# O seletor :invalid

```css
.form__input:invalid {
  border-bottom: 3px solid #7159c198;
}
```