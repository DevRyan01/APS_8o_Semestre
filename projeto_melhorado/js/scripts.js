
function initDarkMode() {
  const saved = localStorage.getItem('tema');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const tema = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(tema);
}

function applyTheme(tema) {
  document.documentElement.setAttribute('data-theme', tema);
  localStorage.setItem('tema', tema);
  const btn = document.getElementById('btnDarkMode');
  if (btn) {
    btn.querySelector('.label').textContent = tema === 'dark' ? 'Modo Claro' : 'Modo Escuro';
  }
}

function toggleDarkMode() {
  const atual = document.documentElement.getAttribute('data-theme');
  applyTheme(atual === 'dark' ? 'light' : 'dark');
}


function initScrollAnimations() {
  const elements = document.querySelectorAll('section, .card, .stat-card, .team-member');
  elements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

const quizData = [
  {
    pergunta: "O que é coleta seletiva?",
    opcoes: [
      "Jogar todo o lixo em um único recipiente",
      "Separar o lixo conforme o tipo de material",
      "Queimar os resíduos para reduzir o volume",
      "Enterrar o lixo no solo"
    ],
    correta: 1,
    explicacao: "✅ Correto! Coleta seletiva é separar o lixo conforme o tipo de material, o que é fundamental para que a reciclagem ocorra de forma eficiente."
  },
  {
    pergunta: "O que significa reciclar um resíduo?",
    opcoes: [
      "Descartar o lixo em aterros sanitários",
      "Reduzir o consumo de produtos industrializados",
      "Transformar o que seria lixo novamente em matéria-prima",
      "Reutilizar embalagens sem nenhum processamento"
    ],
    correta: 2,
    explicacao: "✅ Correto! Reciclar é dar uma segunda chance aos resíduos, transformando o que seria lixo novamente em matéria-prima."
  },
  {
    pergunta: "Para onde devem ir os restos de alimentos, como cascas de frutas e legumes?",
    opcoes: [
      "Lixeira de plásticos",
      "Lixeira de metais",
      "Aterro sanitário comum",
      "Compostagem, virando adubo para a terra"
    ],
    correta: 3,
    explicacao: "✅ Correto! Restos de alimentos são resíduos orgânicos e podem ser transformados em adubo por meio da compostagem."
  },
  {
    pergunta: "Por que é importante separar o vidro corretamente?",
    opcoes: [
      "Porque o vidro não pode ser reciclado",
      "Para evitar acidentes e permitir que vire novas garrafas",
      "Porque o vidro se decompõe rapidamente na natureza",
      "Para facilitar o transporte até o aterro sanitário"
    ],
    correta: 1,
    explicacao: "✅ Correto! Separar o vidro evita acidentes e permite que o material seja transformado em novas garrafas."
  },
  {
    pergunta: "Qual é um dos principais benefícios da reciclagem de metais?",
    opcoes: [
      "Aumenta a extração de minério da natureza",
      "Elimina a necessidade de coleta seletiva",
      "Economiza energia e permite que a lata retorne ao consumo rapidamente",
      "Transforma o metal em adubo orgânico"
    ],
    correta: 2,
    explicacao: "✅ Correto! A reciclagem de metais economiza energia e permite que uma lata usada hoje retorne ao consumo em pouco tempo."
  },
  {
    pergunta: "Segundo o vídeo, separar o lixo é uma atitude:",
    opcoes: [
      "Complicada e que exige equipamentos especiais",
      "Simples e inteligente, que beneficia o planeta",
      "Obrigatória apenas para empresas e indústrias",
      "Útil somente em grandes cidades"
    ],
    correta: 1,
    explicacao: "✅ Correto! O vídeo conclui que separar o lixo é uma atitude simples e reciclar é um gesto inteligente, que gera gratidão por parte do planeta."
  },
  {
    pergunta: "Qual é a relação entre coleta seletiva e reciclagem?",
    opcoes: [
      "São processos independentes e sem relação entre si",
      "A reciclagem substitui a necessidade de coleta seletiva",
      "A coleta seletiva é fundamental para que a reciclagem aconteça de forma eficiente",
      "A coleta seletiva só funciona para resíduos orgânicos"
    ],
    correta: 2,
    explicacao: "✅ Correto! A coleta seletiva é o primeiro passo e é fundamental para que a reciclagem ocorra de maneira eficiente."
  }
];

let quizAtual = 0;
let pontuacao = 0;
let quizRespondido = false;

function initQuiz() {
  const wrapper = document.getElementById('quizWrapper');
  if (!wrapper) return;
  quizAtual = 0;
  pontuacao = 0;
  renderizarPergunta();
}

function renderizarPergunta() {
  const wrapper = document.getElementById('quizWrapper');
  if (!wrapper) return;

  if (quizAtual >= quizData.length) {
    mostrarResultado();
    return;
  }

  const q = quizData[quizAtual];
  const progresso = ((quizAtual) / quizData.length) * 100;

  wrapper.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar" style="width: ${progresso}%"></div>
    </div>
    <div class="quiz-question-block">
      <span class="quiz-question-num">Pergunta ${quizAtual + 1} de ${quizData.length}</span>
      <p class="quiz-question-text">${q.pergunta}</p>
      <div class="quiz-options">
        ${q.opcoes.map((op, i) => `
          <button class="quiz-option" onclick="responder(${i})">${op}</button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
      <button class="quiz-next-btn" id="quizNext" onclick="proximaPergunta()">
        ${quizAtual < quizData.length - 1 ? 'Próxima →' : 'Ver resultado →'}
      </button>
    </div>
  `;
  quizRespondido = false;
}

function responder(indice) {
  if (quizRespondido) return;
  quizRespondido = true;

  const q = quizData[quizAtual];
  const opcoes = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('quizNext');

  opcoes.forEach(btn => btn.disabled = true);
  opcoes[q.correta].classList.add('correct');

  if (indice === q.correta) {
    pontuacao++;
    feedback.textContent = q.explicacao;
    feedback.className = 'quiz-feedback correct show';
  } else {
    opcoes[indice].classList.add('wrong');
    feedback.textContent = `Não foi dessa vez! ${q.explicacao.replace('Correto! ', '')}`;
    feedback.className = 'quiz-feedback wrong show';
  }

  nextBtn.classList.add('show');
}

function proximaPergunta() {
  quizAtual++;
  renderizarPergunta();
}

function mostrarResultado() {
  const wrapper = document.getElementById('quizWrapper');
  const pct = Math.round((pontuacao / quizData.length) * 100);
  let msg;

  if (pct === 100)      {  msg = 'Perfeito! Você é um expert em reciclagem!'; }
  else if (pct >= 70)   {  msg = 'Muito bem! Você tem ótimo conhecimento ambiental!'; }
  else if (pct >= 50)   {  msg = 'Bom começo! Continue aprendendo sobre reciclagem.'; }
  else                  {  msg = 'Que tal explorar o conteúdo do site para aprender mais?'; }

  wrapper.innerHTML = `
    <div class="quiz-result">
      <h3>${pontuacao} de ${quizData.length} acertos (${pct}%)</h3>
      <p>${msg}</p>
      <button class="quiz-restart-btn" onclick="initQuiz()"> Refazer Quiz</button>
    </div>
  `;
}


function initPage() {
  // Mensagem de boas-vindas (mantida do original)
  const welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = ' Boas-vindas! Explore as dicas e envie sua dúvida na página de contato.';
  welcomeMessage.className = 'welcome-note';
  const main = document.querySelector('main');
  if (main) main.prepend(welcomeMessage);

  // Botão enviar (mantido do original)
  const sendButton = document.getElementById('sendButton');
  if (sendButton) {
    sendButton.addEventListener('mouseover', () => { sendButton.textContent = '📨 Clique para enviar!'; });
    sendButton.addEventListener('mouseout',  () => { sendButton.textContent = 'Enviar'; });
  }

  // Textarea typing hint (mantido do original)
  const messageField = document.getElementById('message');
  if (messageField) {
    messageField.addEventListener('keypress', showTypingHint);
  }
}

function submitForm() {
  const name = document.getElementById('fullName');
  if (name && name.value.trim() === '') {
    alert('Por favor, preencha o nome completo antes de enviar.');
    return;
  }
  alert(' Formulário enviado com sucesso! Obrigado pelo seu contato.');
  document.getElementById('contactForm')?.reset();
}

// Mantida do original
function cardHover(cardElement) {
  cardElement.style.boxShadow = '0 14px 30px rgba(56,142,60,0.22)';
  setTimeout(() => { cardElement.style.boxShadow = ''; }, 300);
}

// Mantida do original
function showTypingHint() {
  const footer = document.querySelector('.site-footer');
  if (footer) footer.textContent = 'Dica: escreva sua mensagem com calma e clareza.';
}


document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initScrollAnimations();
  initQuiz();
});
