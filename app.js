const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn');
const lien = document.querySelector('header a');
const info = document.querySelectorAll('.intercation');
const f1 = document.querySelector('.fleches a.F1 img');
const f2 = document.querySelector('.fleches a.F2 img');
const info1 = document.querySelector('.info h3');
const info2 = document.querySelector('.info p');
const h1 = document.querySelector('.cont h1');




window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
        .staggerFrom(titreSpans, 1, {opacity: 0, ease: "power2.out"}, 0.5)
        .from(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
        .from(lien, 1, {opacity: 0, ease: "power2.out"}, '-=1')
        .from(f1, 1, {right: -30, opacity: 0, ease: "power2.out"}, '-=1')
        .from(f2, 1, {left: -30, opacity: 0, ease: "power2.out"}, '-=1')
        .staggerFrom(info, 0.7, {opacity: 0,top: -50, ease: "power2.out"}, 0.3, '-=0.5')
        .from(info1, 1, {left: -30, opacity: 0, ease: "power2.out"}, 0.3)
        .from(h1, 1, {left: -50, opacity: 0, ease: "power2.out"}, 0.3)
        .from(info2, 1, {left: -30, opacity: 0, ease: "power2.out"}, '-=1');
    TL.play();
});


gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

gsap.ticker.add(() => {

    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
});