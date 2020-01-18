function LoadImage(){
  const character = document.querySelector('.character');

  // ドラッグした時イベントを発生させる
  character.addEventListener('dragstart', ()=>{
    console.log('dragしました');
  });
  // ドラッグしている間イベントを発生させる
  character.addEventListener('drag', ()=>{
    console.log('dragしています');
  });
  // ドラッグを終わったときにイベントを発生させる
  character.addEventListener('dragend', ()=>{
    console.log('dragが終わりました');
  });
  const box = document.querySelector('.box');
  // ドラッグアンドドロップされるとページが切り替わるので、そのイベントをキャンセルさせる。
  box.addEventListener('dragover', (e)=>{
    e.preventDefault();
  });
  box.addEventListener('drop', (e)=>{
    console.log('ドロップされました');
    e.preventDefault();
  });
}
