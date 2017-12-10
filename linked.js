var title = document.querySelector('.input-title');
var url = document.querySelector('.input-url');

var enterbtn = document.querySelector('.enter-button');

enterbtn.addEventListener('click', createElements);
// title.addEventListener('keyup', grabUserData);

function createElements(event) {
  event.preventDefault();
  var parent = document.querySelector('.bookmarks');
  var child = document.createElement('article');
  child.setAttribute('class', 'card');
  createCard (parent, child);
};

function createCard(parent, child) {
  child.innerHTML = (`
    <h2>${title.value}</h2>
    <nav> 
      <a href="${url.value}">${url.value}</a>
    </nav>
    <br>
    <button class="bookmark-btn" id="read-button">Read</button>
    <button class="bookmark-btn" id="delete-button">Delete</button> `);
  parent.appendChild(child);
  console.log('child', child);
};


