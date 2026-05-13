function initPage() {
  const welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = 'Boas-vindas! Explore as dicas e envie sua dúvida na página de contato.';
  welcomeMessage.className = 'welcome-note';
  const main = document.querySelector('main');
  if (main) {
    main.prepend(welcomeMessage);
  }

  const sendButton = document.getElementById('sendButton');
  if (sendButton) {
    sendButton.addEventListener('mouseover', () => {
      sendButton.textContent = 'Clique para enviar!';
    });
    sendButton.addEventListener('mouseout', () => {
      sendButton.textContent = 'Enviar';
    });
  }

  const messageField = document.getElementById('message');
  if (messageField) {
    messageField.addEventListener('keypress', () => {
      document.querySelector('.site-footer').textContent = 'Você está digitando sua mensagem.';
    });
  }
}

function submitForm() {
  const name = document.getElementById('fullName');
  if (name && name.value.trim() === '') {
    alert('Por favor, preencha o nome completo antes de enviar.');
    return;
  }
  alert('Formulário enviado com sucesso! Obrigado pelo seu contato.');
  document.getElementById('contactForm')?.reset();
}

function cardHover(cardElement) {
  cardElement.style.boxShadow = '0 14px 30px rgba(56, 142, 60, 0.22)';
  setTimeout(() => {
    cardElement.style.boxShadow = '';
  }, 300);
}

function showTypingHint() {
  const footer = document.querySelector('.site-footer');
  if (footer) {
    footer.textContent = 'Dica: escreva sua mensagem com calma e clareza.';
  }
}
