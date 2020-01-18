document.write("<script type='text/javascript' src='Drag-and-drop.js'></script>");

document.write("<script type='text/javascript' src='Mouseover.js'></script>");

window.onload = ()=>{

  LoadImage();
  Mouseover();
  
  const character1 = document.querySelector('.character1');

  document.addEventListener('mousedown', ()=>{
    
    document.addEventListener('mousemove', onMouseMove);
    
    document.addEventListener('mouseup', ()=>{
      document.removeEventListener('mousemove', onMouseMove);
    });
  });
  function onMouseMove(event){
    console.log('hello');
    character1.style.left = `${event.clientX - 100}px`;
    character1.style.top = `${event.clientY - 100}px`;
  }
}
