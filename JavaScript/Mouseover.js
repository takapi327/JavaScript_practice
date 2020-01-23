function Mouseover(){
  const button = document.querySelector('.button');

  button.addEventListener('click', ()=>{
    alert('ボタンが押されました');
  });

  const logarea = document.querySelector('#log1');
  const mouseover = document.querySelector('.main');

  // マウスカーソルが要素の上に乗った時にイベントが起こる
  mouseover.addEventListener('mouseenter', ()=>{

    // 要素内でマウスをクリックした時にイベントが発生する
    logarea.addEventListener('mousedown', ()=>{
      logarea.innerHTML = `マウスボタンを押しています。`;
    });

    // 要素ないでマウスボタンを離した時にイベントが発生する
    logarea.addEventListener('mouseup', ()=>{
      logarea.innerHTML = `マウスボタンを離しました。`;
    });

    // 要素ないでマウスを動かしている時にイベントが発生する
    logarea.addEventListener('mousemove', ()=>{
      logarea.innerHTML = `マウスを動かしています。`;
    });
  });

  // マウスカーソルが要素の上から外れた時にイベントが発生する
  mouseover.addEventListener('mouseleave', ()=>{
    logarea.innerHTML = `マウス`;
  });

const character1 = document.querySelector('.character1');

document.addEventListener('mousedown', ()=>{
  
  document.addEventListener('mousemove', onMouseMove);
  
  document.addEventListener('mouseup', ()=>{
    document.removeEventListener('mousemove', onMouseMove);
  });
});
function onMouseMove(event){
  character1.style.left = `${event.clientX - 100}px`;
  character1.style.top = `${event.clientY - 100}px`;
}
}

