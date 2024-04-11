// Elementos da página
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');
const header = document.querySelector('header');

// Variável global para controlar se a animação já foi executada
let animationExecuted = false;

// Função para revelar elementos com ScrollReveal
function revealElements(selector, origin) {
    ScrollReveal().reveal(selector, {
        origin: origin,
        distance: '80px',
        duration: 2000,
        delay: 200
    });
}

// Função para iniciar a animação se ainda não foi executada
function startAnimation() {
    if (!animationExecuted) {
        setTimeout(() => {
            revealElements('.home-content, .heading', 'top');
            revealElements('.home-img, .skills-container, .hobbies-container, .projects-box, .contact form', 'bottom');
            revealElements('.home-content h1, .about-img', 'left');
            revealElements('.home-content p, .about-content', 'right');

            animationExecuted = true;
        }, 500); // Atraso de 500 milissegundos (meio segundo) antes de iniciar a animação
    }
}

// Elementos a serem revelados quando a página é carregada
document.addEventListener('DOMContentLoaded', startAnimation);

// Toggle menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
    startAnimation(); // Inicia a animação ao clicar no menu
});

// Função para atualizar os links ativos
function updateActiveLinks() {
    const scrollTop = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*="${sectionId}"]`).classList.add('active');
        }
    });
}

// Função para rolar a página para o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rola suavemente
    });
}

// Atualizar links ativos no scroll
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
    updateActiveLinks();
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
});

// Rolar para o topo ao carregar a página
window.onload = function () {
    scrollToTop();
};
