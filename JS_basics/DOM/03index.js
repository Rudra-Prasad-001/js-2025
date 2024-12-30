//Javascript async Project
let hex = `0123456789ABCDEF`

// let colorCode = `#`;

//Color code will be 6 characters after #
function generateRandomColor() {
  let colorCode = `#`;
for(let i = 0; i < 6; i++) {
  colorCode += hex[Math.floor(Math.random()*16)];
}
 return colorCode;
}

// console.log(colorCode);

const start = document.querySelector('#start');

const stop = document.querySelector('#stop');

let intervalId = null;

let changeBG = function changeBackGroundColor() {
 
  if(intervalId !== null) return;
  intervalId = setInterval(colorChange,1000);
  console.log(intervalId)

  function colorChange() {
    document.body.style.backgroundColor = generateRandomColor();
  }
}


let stopChangingBG =  () => {
  clearInterval(intervalId);
  intervalId = null;
}

start.addEventListener('click', changeBG);

stop.addEventListener('click',stopChangingBG);
