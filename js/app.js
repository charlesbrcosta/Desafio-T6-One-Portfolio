let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

//toggle navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};

// active links 
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    //navbar
    let header = document.querySelector('header');

    header.classList.toggle('tik', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};

//scrollReveal

ScrollReveal({ 
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});
    
ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .hobbies-container, .projects-box, .contact form',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right' });


ScrollReveal().reveal('.box1, .box2, .box3',  { origin: 'top' });
ScrollReveal().reveal('.box4, .box5, .box6',  { origin: 'bottom' });



//typed js
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Front-end', 'Analista de Suporte Técnico', ''],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    
});