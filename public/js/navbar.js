document.onload = () => {
  let btn = $('#collapse-button');
  let collapsenav = $('#collapseNav');
  let content = $('#content-page');
  let linkColapseNav = $('#collapseNav').find('a');

  function toogleCollapse() {
    collapsenav.toggleClass('no-collapse')
    btn.toggleClass('collapse-button-active');
    content.toggleClass('blur')
    if (collapsenav.hasClass('no-collapse')) {
      window.addEventListener('scroll', disableScroll)
    } else {
      window.removeEventListener('scroll', disableScroll)
    }
  }

  function disableScroll() {
    window.scrollTo(0, 0);
  }

  btn.click(toogleCollapse);

  content.click = () => {
    if (collapsenav.hasClass('no-collapse')) {
      toogleCollapse()
    }
  }

  for (let i = 0; i < linkColapseNav.length; i++) {
    linkColapseNav[i].addEventListener('click', () => {
      if (collapsenav.hasClass('no-collapse')) {
        toogleCollapse()
      }
    })
  }

  // Scroll to top  
  let linkNavBar = $('.nav-items').find('a');

  let section = $('.section');
  function ChangeLinkState() {
    let index = section.length;
    while (--index && window.scrollY + 50 < section[index].offsetTop) { }
    for (let i = 0; i < linkNavBar.length; i++) {
      linkNavBar[i].classList.remove('active');
    }
    linkNavBar[index].classList.add('active');
  }
  ChangeLinkState();
  window.addEventListener('scroll', ChangeLinkState);

  $('a[href^="#"]').click(function () {
    var destino = $(this.hash);
    if (destino.length === 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length === 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
}