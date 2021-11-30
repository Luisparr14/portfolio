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


}