

window.addEventListener('scroll', function () {
    // let value = scrollY * 4;
    let value = scrollY;

    // document.querySelector('.bold-text').style.transform = `translateX(${value}px)`;
    document.querySelector('.section-2').classList.toggle('active', window.scrollY > 150);
    document.querySelector('.bold-text').style.transform = `translateX(${Math.min(value * 10, 2000)}px)`;
    document.querySelector('.footer').classList.toggle('hidden', window.scrollY > 150);
    document.querySelector('.title-text').classList.toggle('active', window.scrollY > 150);
});

const typed = new Typed('.multiple-text', {
    strings: ['Marc Edison.', 'tamad.', 'a filipino.', 'Web Developer?'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});



ScrollReveal().reveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.bold-text', { origin: 'top' });