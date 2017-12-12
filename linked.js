var title = document.querySelector('.input-title');
var url = document.querySelector('.input-url');
var enterBtn = document.querySelector('.enter-button');
var counter = 0;
var readCounter = 0;

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
  parentElement.prepend(childElement);
  counter++;
  createCounter();
  console.log(counter, 'add')
  deleteInputField();
};

function createCounter() {
  // get the buttons and change the inner html to the counter
  var counterButton = document.querySelector('.count');
  counterButton.innerText = counter;
  // var readCounterButton = document.querySelector('read-count');
  // readCounterButton.innerText = readCounter;
}

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
    // var readLink = event.target.closest('a')
    // console.log(readLink)
    // var readLink = event.target.nextElementChild;
    // event.target.classList.toggle('link-read');
    var readCardElement = event.target.closest('article');
    readCardElement.classList.toggle('card-read');
    event.target.classList.toggle('read-btn');
    readCounter++;
    
  };
};

function deleteButton (childElement) {
  if(event.target.matches('#delete-button') === true) {
  var elementToRemove = event.target.closest('article')
  elementToRemove.remove();
  counter--;
  console.log(counter, 'remove')
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

enterBtn.addEventListener('click', createElements);
title.addEventListener('input', disabledEnterButton);
url.addEventListener('input', disabledEnterButton);





