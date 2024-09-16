function showAbout() {
    window.location.href = "#sobre";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var statusMessage = document.getElementById("statusMessage");
    var formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            statusMessage.textContent = "Mensagem enviada com sucesso!";
            document.getElementById("contactForm").reset();
        } else {
            statusMessage.textContent = "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.";
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        statusMessage.textContent = "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.";
    });
});

// Seleciona o botão de alternância de tema
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Função para alternar o tema
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.documentElement.classList.add('light-theme');
    } else {
        document.documentElement.classList.remove('light-theme');
    }
});





