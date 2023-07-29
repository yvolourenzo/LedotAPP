const toggleBtn = document.getElementById('toggleBtn');
    const opcoes = document.querySelector('.opcoes');

    toggleBtn.addEventListener('click', () => {
      opcoes.classList.toggle('show'); // Adicione ou remova a classe "show" ao clicar no botão
    });