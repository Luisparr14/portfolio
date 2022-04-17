let btn = document.querySelector('#collapse-button');
let collapsenav = document.querySelector('#collapseNav');
let content = document.querySelector('#content-page');
let linkColapseNav = document.querySelector('#collapseNav').children

function toogleCollapse() {
  collapsenav.classList.toggle('no-collapse');
  btn.classList.toggle('collapse-button-active');
  content.classList.toggle('blur');
  if (collapsenav.classList.contains('no-collapse')) {
    window.addEventListener('scroll', disableScroll)
  } else {
    window.removeEventListener('scroll', disableScroll)
  }
}

function disableScroll() {
  window.scrollTo(0, 0);
}

btn.addEventListener('click', toogleCollapse);
content.addEventListener('click', () => {
  if (collapsenav.classList.contains('no-collapse')) {
    toogleCollapse()
  }
});

for (let i = 0; i < linkColapseNav.length; i++) {
  linkColapseNav[i].addEventListener('click', () => {
    if (collapsenav.classList.contains('no-collapse')) {
      toogleCollapse()
    }
  })
}

// Scroll to top 
let linkNavBar = document.querySelector('.nav-items').querySelectorAll('a');
let section = document.querySelectorAll('.section');
function ChangeLinkState() {
  let index = section.length;
  while (--index && window.scrollY + 50 < section[index].offsetTop) { }
  for (let i = 0; i < linkNavBar.length; i++) {
    linkNavBar[i].classList.remove('active');
  }
  linkNavBar[index].classList.add('active');
}
window.addEventListener('scroll', ChangeLinkState);

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();    
    let body = document.querySelector('body, html');
    let destino = document.querySelector(link.getAttribute('href'));

    body.scrollTo({
      top: destino.offsetTop,
      behavior: 'smooth'
    });
  })
})