const numberDiv = document.querySelector('.number');

function increment(){
  const intervalId = setInterval(() => {
    let currNumber = Number(numberDiv.textContent);
    currNumber++;
    if(currNumber===11) {
      clearInterval(intervalId);
    } else{
      numberDiv.textContent=currNumber;
    }
  },1000);
}

increment();