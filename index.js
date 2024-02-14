const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para exibir uma caixa de diálogo com uma mensagem em JavaScript?",
      respostas: [
        "alert()",
        "messageBox()",
        "prompt()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para verificar se dois valores são iguais em valor e tipo?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método `parseInt()` faz em JavaScript?",
      respostas: [
        "Converte um número para uma string",
        "Converte uma string para um número inteiro",
        "Arredonda um número para o inteiro mais próximo",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador `%` faz em JavaScript?",
      respostas: [
        "Divisão",
        "Multiplicação",
        "Resto da divisão",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método `querySelector()` em JavaScript?",
      respostas: [
        "Selecionar elementos pelo nome da tag",
        "Selecionar elementos pelo ID",
        "Selecionar elementos pela classe",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento Orientado a Módulos",
        "Modelo de Objetos Distribuídos",
        "Modelo de Objeto do Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão `2 + '2'` em JavaScript?",
      respostas: [
        "4",
        "22",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método `map()` faz em arrays JavaScript?",
      respostas: [
        "Adiciona um elemento ao final do array",
        "Cria um novo array com os resultados da chamada de uma função para cada elemento",
        "Remove o último elemento do array",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou repetição para copiar as perguntas
  for(const item of perguntas) {
  // aqui está clonando
    const quizItem = template.content.cloneNode(true)
  // aqui está colocando as perguntas 
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  // mais um loop mas agora para as respostas
    for(let resposta of item.respostas) {
  // aqui clonando as respostas
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta) {
        corretas.add(item)
       }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  // para puxar as respostas:
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
  // agora que temos as respostas, não faz sentido ainda deixar o "pergunta A"
    quizItem.querySelector('dl dt').remove()
  
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }