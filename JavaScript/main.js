document.write("<script type='text/javascript' src='Drag-and-drop.js'></script>");

document.write("<script type='text/javascript' src='Mouseover.js'></script>");

document.write("<script type='text/javascript' src='popup.js'></script>");

window.addEventListener('scroll', ()=>{
  console.log('スクロール',window.scrollX,window.scrollY);
});

window.addEventListener('keydown', handlekeydown);

  function handlekeydown(event){
    const keyCode = event.keyCode;
    if(keyCode === 39){
      console.log('右キーが押されました。');
    }
    if(keyCode === 37){
      console.log('左キーが押されました。');
    }
    if(keyCode === 38){
      console.log('上キーが押されました。');
    }
    if(keyCode === 40){
      console.log('下キーが押されました。');
    }
  }


window.onload = ()=>{

  LoadImage(); 
  Mouseover();
  Popup();
  
const widthLog = document.querySelector('#widthLog');
const heightLog = document.querySelector('#heightLog');
let resizeTimer;
window.addEventListener('resize', ()=>{
  if(resizeTimer != null){
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(()=>{
    onPesize();
  },1000);
});

function onPesize(){
  widthLog.innerHTML = `${window.innerWidth}px`;
  heightLog.innerHTML = `${window.innerHeight}px`
}

}
