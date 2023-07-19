let ball = document.querySelector('.ball')
let y = 10
let dy = 1
let menuMobile = document.querySelector('.mobile-menu')

function menuShow(){
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "imagens/menu_white_36dp.png"
    }else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "imagens/close_white_36dp.png"
    }
}

function bounce(){
    requestAnimationFrame(bounce)
    if(y+70 > 210){
        dy = -dy
    }
    else{
        dy += 0.1
    }
    y += dy
    ball.style.top = `${y}px`
}
bounce()

function onImg1(){
    this.setAttribute('src', 'imagens/formulario-img.jpg')
}

function outImg1(){
    this.setAttribute('src', 'imagens/simbolo-v.avif')
}

function onImg2(){
    this.setAttribute('src', 'imagens/busca-dinamica.jpg')
}

function outImg2(){
    this.setAttribute('src', 'imagens/simbolo-v.avif')
}

function onImg3(){
    this.setAttribute('src', 'imagens/em-breve.avif')
}

function outImg3(){
    this.setAttribute('src', 'imagens/simbolo-v.avif')
}

function onImg4(){
    this.setAttribute('src', 'imagens/em-breve.avif')
}

function outImg4(){
    this.setAttribute('src', 'imagens/simbolo-v.avif')
}

function onImg5(){
    this.setAttribute('src', 'imagens/em-breve.avif')
}

function outImg5(){
    this.setAttribute('src', 'imagens/simbolo-v.avif')
}

function onImg6(){
    this.setAttribute('src', 'imagens/em-breve.avif')
}

function outImg6(){
    this.setAttribute('src', 'imagens/simbolo-v.avif')
}

const menuItems = document.querySelectorAll('.nav-item a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 100;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to);
}
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 800;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

  function criarSistemaSolar() {
    var planets = [
        { name: "HTML", size: 50, speed: 0.003, img: "imagens/html-redondo.png" },
        { name: "CSS", size: 50, speed: 0.002, img: "imagens/css-redondo.png" },
        { name: "JS", size: 50, speed: 0.001, img: "imagens/js-redondo.png" },
        // Adicione os outros planetas aqui
    ];

    var container = document.getElementById("container");

    planets.forEach(function (planetInfo) {
        var planet = document.createElement("img");
        planet.className = "planet";
        planet.style.width = planetInfo.size + "px";
        planet.style.height = planetInfo.size + "px";
        planet.src = planetInfo.img;
        container.appendChild(planet);

        setInterval(function () {
            var angle = Date.now() * planetInfo.speed;
            var radius = Math.min(container.offsetWidth, container.offsetHeight) / 200 - planetInfo.size / 2;
            var x = Math.cos(angle) * radius;
            var y = Math.sin(angle) * radius;
            planet.style.left = container.offsetWidth / 2 + x + "px";
            planet.style.top = container.offsetHeight / 3 + y + "px";
        }, 16);
    });
}

function redimensionarSistemaSolar() {
    var container = document.getElementById("container");
    container.innerHTML = "";

    criarSistemaSolar();
}

redimensionarSistemaSolar();

window.addEventListener("resize", redimensionarSistemaSolar);