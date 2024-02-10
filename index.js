const perguntas = [
  {
      pergunta: "Qual jogador é conhecido como 'The Last Dance' e ganhou 6 campeonatos da NBA com o Chicago Bulls nos anos 90?",
      respostas: [
          "Magic Johnson",
          "Michael Jordan",
          "Larry Bird"
      ],
      correta: 1
  },
  {
      pergunta: "Qual time da NBA conquistou o maior número de títulos na história da liga?",
      respostas: [
          "Los Angeles Lakers",
          "Boston Celtics",
          "Chicago Bulls"
      ],
      correta: 1
  },
  {
      pergunta: "Quem é o jogador recordista de pontos em uma única partida na história da NBA?",
      respostas: [
          "Kobe Bryant",
          "Wilt Chamberlain",
          "Michael Jordan"
      ],
      correta: 1
  },
  {
      pergunta: "Qual jogador ganhou o maior número de prêmios de MVP na história da NBA?",
      respostas: [
          "LeBron James",
          "Michael Jordan",
          "Kareem Abdul-Jabbar"
      ],
      correta: 2
  },
  {
      pergunta: "Quantos títulos da NBA o San Antonio Spurs conquistou?",
      respostas: [
          "3",
          "5",
          "7"
      ],
      correta: 1
  },
  {
      pergunta: "Quem é o treinador com mais títulos de campeonato da NBA?",
      respostas: [
          "Phil Jackson",
          "Red Auerbach",
          "Gregg Popovich"
      ],
      correta: 0
  },
  {
      pergunta: "Qual jogador tem o recorde de maior número de triplos-duplos na história da NBA?",
      respostas: [
          "Magic Johnson",
          "Russell Westbrook",
          "LeBron James"
      ],
      correta: 1
  },
  {
      pergunta: "Qual foi o primeiro time da NBA a conquistar três títulos consecutivos?",
      respostas: [
          "Chicago Bulls",
          "Los Angeles Lakers",
          "Boston Celtics"
      ],
      correta: 2
  },
  {
      pergunta: "Quem foi o primeiro jogador a ser draftado na história da NBA?",
      respostas: [
          "Bill Russell",
          "Wilt Chamberlain",
          "Oscar Robertson"
      ],
      correta: 1
  },
  {
      pergunta: "Qual é o recorde de pontos em uma única temporada da NBA?",
      respostas: [
          "2832",
          "4029",
          "3362"
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

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}