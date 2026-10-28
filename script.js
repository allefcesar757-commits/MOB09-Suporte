document.addEventListener('DOMContentLoaded', () => {

  // 1. Ação do Botão "Pedir ajuda agora"
  const requestBtn = document.getElementById('btn-request');
  const confirmCard = document.getElementById('confirmation-card');

  if (requestBtn && confirmCard) {
    requestBtn.addEventListener('click', () => {
      // Efeito visual de confirmação
      confirmCard.style.display = 'flex';
      confirmCard.scrollIntoView({ behavior: 'smooth' });

      // Simulação de retorno
      alert('Seu pedido de ajuda presencial foi enviado para a inspetoria!');
    });
  }

  // 2. Simulação de Gravador de Áudio
  const micBtn = document.getElementById('btn-mic');
  const descInput = document.getElementById('desc-input');

  if (micBtn && descInput) {
    micBtn.addEventListener('click', () => {
      alert('Gravação de voz iniciada... Fale sua solicitação.');
      descInput.value = "Preciso de auxílio na entrada do bloco B";
    });
  }

  // 3. Botão "Ouvir a tela"
  const listenBtn = document.getElementById('btn-listen');
  if (listenBtn) {
    listenBtn.addEventListener('click', () => {
      alert('Leitura de áudio ativada: "Precisa de ajuda presencial? Pressione o botão para pedir ajuda agora."');
    });
  }

  // 4. Botão "Ver em Libras"
  const librasBtn = document.getElementById('btn-libras');
  if (librasBtn) {
    librasBtn.addEventListener('click', () => {
      alert('Abrindo intérprete virtual de Libras.');
    });
  }

  // 5. Botão Voltar
  const backBtn = document.querySelector('.btn-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.history.back();
    });
  }

});