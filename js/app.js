// Elementos da página
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');
const header = document.querySelector('header');

// Toggle menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
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

// Configurações do ScrollReveal
ScrollReveal({ 
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Função para revelar elementos com ScrollReveal
function revealElements(selector, origin) {
    ScrollReveal().reveal(selector, { origin: origin });
}

function revealAnimation(){
    // Elementos a serem revelados
    revealElements('.home-content, .heading', 'top');
    revealElements('.home-img, .skills-container, .hobbies-container, .projects-box, .contact form', 'bottom');
    revealElements('.home-content h1, .about-img', 'left');
    revealElements('.home-content p, .about-content', 'right');
}

// Configurações do Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Front-end', 'Analista de Suporte Técnico', ''],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Rolar para o topo ao carregar a página
window.onload = function() {
    scrollToTop();  
    revealAnimation();  
};
