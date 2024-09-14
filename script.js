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

const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
});


const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    if (window.innerWidth <= 768) {  // Garante que funcione apenas em dispositivos móveis
        sidebar.classList.toggle('open'); // Alterna entre abrir e fechar a sidebar
    }
});
