const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const iconeMenu = menuToggle.querySelector('i'); // Seleciona o ícone do FontAwesome

menuToggle.addEventListener('click', () => {
    // Alterna a classe active no menu
    menu.classList.toggle('active');

    // Troca o ícone: se o menu estiver ativo, vira um 'X', senão, volta para as 'barras'
    if (menu.classList.contains('active')) {
        iconeMenu.classList.remove('fa-bars');
        iconeMenu.classList.add('fa-xmark'); // Usa o ícone de X do FontAwesome
    } else {
        iconeMenu.classList.remove('fa-xmark');
        iconeMenu.classList.add('fa-bars');
    }
});

// Fecha o menu ao clicar em qualquer link ou botão de ação dentro dele
document.querySelectorAll('.navegacao, .chat_whatsapp_one').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active'); // Esconde o menu
        iconeMenu.classList.remove('fa-xmark'); // Volta o ícone original
        iconeMenu.classList.add('fa-bars');
    });
});

// ================= VIDEOS =================
document.querySelectorAll(".video_container").forEach(container => {

    const video = container.querySelector("video");
    const botaoPrincipal = container.querySelector(".play-btn");

    video.controls = false;

    botaoPrincipal.addEventListener("click", () => {
        video.controls = true;
        video.play();
        botaoPrincipal.classList.add("hidden");
    });

    video.addEventListener("pause", () => {
        if (!video.ended) {
            video.controls = false;
            botaoPrincipal.classList.remove("hidden");
        }
    });

    video.addEventListener("ended", () => {
        video.controls = false;
        botaoPrincipal.classList.remove("hidden");
    });

});

