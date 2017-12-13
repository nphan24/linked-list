var title = document.querySelector('.input-title');
var url = document.querySelector('.input-url');
var enterBtn = document.querySelector('.enter-button');
var counter = 0;
var readCounter = 0
  
function createElements(event) {
  event.preventDefault();
  var parentElement = document.querySelector('.bookmarks');
  var childElement = document.createElement('article');
  childElement.setAttribute('class', 'card');
  readySecondaryButtons(parentElement);
  createCard (parentElement, childElement);
};

function createCard(parentElement, childElement) {
  childElement.innerHTML = (`
    <h2>${title.value}</h2>
    <nav> 
      <a href="${url.value}">${url.value}</a>
    </nav>
    <br>
    <button class="bookmark-btn" id="read-button">Read</button>
    <button class="bookmark-btn" id="delete-button">Delete</button> `);
  parentElement.appendChild(childElement);
  deleteInputField();
  counter++;
  counterCard();

};

function deleteInputField() {
  title.value = "";
  url.value = "";
  enterBtn.setAttribute('disabled', true);
};

function readySecondaryButtons (parentElement) {
  
  parentElement.addEventListener('click', toggleReadButton);
  parentElement.addEventListener('click', deleteButton);
  
};

function toggleReadButton () {

  if(event.target.matches('#read-button') === true) {
    var readCardElement = event.target.closest('article');
    // var readButtons = event.target.classList;
    var readButtons = document.querySelectorAll('.read-btn');
    console.log(readButtons)
    readCardElement.classList.toggle('card-read');
    event.target.classList.toggle('read-btn');


    // var readLink = event.target.parentNode;
    // var nextchild = readLink.firstChild
    // console.log(nextchild)
    // event.target.classList.toggle('link-read');
    
    




    
    
    for (var i = 0; i< readButtons.length; i++){
      if (readButtons[i] === 'read-btn') {
        readCounter++;
     
        counterRead();
      } 
      // else if (readCounter[i] !== 'read-btn') {
        
      //   readCounter--;
        
      //   counterRead();
      // }
     }
  }
}



function deleteButton (childElement) {
  if(event.target.matches('#delete-button') === true) {
  var elementToRemove = event.target.closest('article')
  elementToRemove.remove();
  counter--;
  counterCard();
  };
};

function disabledEnterButton() {
  if(title.value === '' && url.value === ''){
    enterBtn.disabled = true;
  } else if (title.value === '' || url.value === '') {
    enterBtn.diabled = true;
  } else {
    enterBtn.disabled = false;
  };
};

function counterCard() {
  var cardCountButton = document.querySelector('.count');
  cardCountButton.innerText = counter;
};

function counterRead() {
  var readCounterButton = document.querySelector('.read-count');
  readCounterButton.innerText = readCounter;
}

enterBtn.addEventListener('click', createElements);
title.addEventListener('input', disabledEnterButton);
url.addEventListener('input', disabledEnterButton);





