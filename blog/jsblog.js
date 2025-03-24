document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado com sucesso!");

    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    const closeMenu = document.getElementById("closeMenu");
    const menuLinks = document.querySelectorAll("#menu a");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            console.log("Menu aberto");
            menu.classList.add("active");
        });
    } else {
        console.error("Erro: Elementos do menu não encontrados!");
    }

    if (closeMenu && menu) {
        closeMenu.addEventListener("click", () => {
            console.log("Menu fechado");
            menu.classList.remove("active");
        });
    }

    if (menuLinks.length > 0 && menu) {
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                console.log("Menu fechado ao clicar em um link");
                menu.classList.remove("active");
            });
        });
    }





    // Evento de rolagem para verificar visibilidade (caso necessário)
    if (typeof checkVisibility === "function") {
        window.addEventListener("scroll", checkVisibility);
        checkVisibility(); // Executa assim que a página carregar
    } else {
        console.warn("Função checkVisibility não encontrada.");
    }

});




  