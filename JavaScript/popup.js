function Popup(){
  const balloon = document.querySelector('#balloon');
  const paragraph = document.querySelector('.paragraph');

  paragraph.addEventListener('selectstart', ()=>{
    paragraph.addEventListener('mouseup', (event)=>{
      const selection = window.getSelection().toString(); 

      if(selection.length > 0){
        balloon.innerHTML = selection;
        balloon.classList.add('on');
        balloon.style.left = `${event.clientX - balloon.clientWidth}px`;
        balloon.style.top = `${event.clientY - balloon.scrollHeight}px`;
      }else{
        removePopup();
      }
    },
    {once: true}
    );
  });

  balloon.addEventListener('click', removePopup);

  function removePopup(){
    balloon.classList.remove('on');
  }
}