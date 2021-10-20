window.onload=()=>{
  let btn = document.getElementById('collapse-button');
  let collapsenav= document.getElementById('collapseNav');
  let content= document.getElementById('content-page');

  //Collapse navbar
  function toogleCollapse() {
    
    collapsenav.classList.toggle('no-collapse')
    content.classList.toggle('blur')  
  }
  btn.addEventListener('click', toogleCollapse)
  collapsenav.addEventListener('mouseleave', toogleCollapse)
}