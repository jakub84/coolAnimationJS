const container = document.querySelector('#card-container');
const card = document.querySelector('#card');
const title = document.querySelector('#title');
const btn = document.querySelector('#button');
const text = document.querySelector('#text');


container.addEventListener("mousemove", (e) => {
    let xParam = (window.innerWidth / 2 - e.pageX) / 20;
    let yParam = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xParam}deg) rotateX(${yParam}deg)`;

})

container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(120px)';
    btn.style.transform = 'translateZ(60px)';
    text.style.transform = 'translateZ(30px)';
})

container.addEventListener("mouseleave", e => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    card.style.transition = 'all 0.5s';
    title.style.transform = 'translateZ(0px)';
    btn.style.transform = 'translateZ(0px)';
    text.style.transform = 'translateZ(0px)';
})