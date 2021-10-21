window.onload = () => {
  let btn = document.getElementById('collapse-button');
  let collapsenav = document.getElementById('collapseNav');
  let content = document.getElementById('content-page');
  let anchor = document.getElementsByTagName('a');
  //Collapse navbar
  function toogleCollapse() {
    collapsenav.classList.toggle('no-collapse')
    content.classList.toggle('blur')
  }

  btn.addEventListener('click', toogleCollapse)
  content.addEventListener('click', () => {
    if (collapsenav.classList.contains('no-collapse')) {
      toogleCollapse()
    }
  })

  anchor[0].onclick(()=>{
    console.log('a');
  })



}