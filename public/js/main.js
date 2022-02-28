window.onload = () => {
  let btn = document.getElementById('collapse-button');
  let collapsenav = document.getElementById('collapseNav');
  let content = document.getElementById('content-page');
  let linkColapseNav = document.getElementById('collapseNav').getElementsByTagName('a');

  function toogleCollapse() {
    collapsenav.classList.toggle('no-collapse')
    btn.classList.toggle('collapse-button-active');
    content.classList.toggle('blur')
  }

  btn.addEventListener('click', toogleCollapse)

  content.addEventListener('click', () => {
    if (collapsenav.classList.contains('no-collapse')) {
      toogleCollapse()
    }
  })

  for (let i = 0; i < linkColapseNav.length; i++) {
    linkColapseNav[i].addEventListener('click', () => {
      if (collapsenav.classList.contains('no-collapse')) {
        toogleCollapse()
      }
    })
  }

  // Scroll to top  
  let linknavbar = document.querySelectorAll('.nav-link');
  let section = document.querySelectorAll('.section');

  function ChangeLinkState() {
    let index = section.length;
    while (--index && window.scrollY + 50 < section[index].offsetTop) { }
    linknavbar.forEach(link => {
      link.classList.remove('active');
    });
    linknavbar[index].classList.add('active');

  }
  ChangeLinkState();
  window.addEventListener('scroll', ChangeLinkState);
}