const unoderListItems = document.querySelectorAll('li');

const body = document.querySelector('body');

console.log(unoderListItems);

const paraMain = document.createElement('p');

paraMain.textContent = "I am created directly via js";

paraMain.setAttribute('class' , 'main-paragraph');

paraMain.style.backgroundColor = "green";

body.appendChild(paraMain);

console.log(body.children);
console.log(body.parentNode);
