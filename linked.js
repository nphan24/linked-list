var title = document.querySelector('.input-title');
var url = document.querySelector('.input-url');
var enterBtn = document.querySelector('.enter-button');



// readBtn.addEventListener('click', toggleReadButton);
enterBtn.addEventListener('click', createElements);

// title.addEventListener('keyup', grabUserData);

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
};

function readySecondaryButtons (parentElement) {
  parentElement.addEventListener('click', toggleReadButton);
  parentElement.addEventListener('click', deleteButton);
};

function toggleReadButton () {
  if(event.target.matches('#read-button') === true) {
    var readCardElement =event.target.closest('article');
    // var readLink = event.target.closest('a');
    // readLink.classList.toggle('link-read');
    readCardElement.classList.toggle('card-read');
    event.target.classList.toggle('read-btn');
  };
};

function deleteButton (childElement) {
  if(event.target.matches('#delete-button') === true) {
  var elementToRemove =event.target.closest('article')
  elementToRemove.remove();

  };
};


// find the delete button on the card that is clicked
// add eventlister del-btn
// when it is clicked it removes that card from the bookmark section



