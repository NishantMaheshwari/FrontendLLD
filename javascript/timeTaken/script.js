function timeConsumingFunc(){
  console.time('funcTime');
  for(let i=0;i<1e8;i++){

  }
  console.timeEnd('funcTime')
}

timeConsumingFunc();