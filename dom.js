// console.log(document.URL);
// document.title=123;
// console.log(document.head);
// console.log(document.domain);
// console.log(document.doctype);
// console.log(document.getElementById("header-title"));

// var headertitle= document.getElementById("header-title"); 
// var othearder=document.getElementById("main-header");
// headertitle.style.backgroundColor='black';

// var add=document.getElementById("add");
// add.innerHTML=<b>"Add Items"</b>
// add.style.color='green';

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent="Hello 2";
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}

items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent="Hello 2";
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}

li[2].style.backgroundColor='green';

for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}

var wli=document.getElementsByClassName('without-same-class');
wli[0].textContent="Hello 2";

var secondItem=document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor='green';

var thirdItem=document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.visibility='hidden';

var secItem=document.querySelectorAll(".list-group-item");
secItem[1].textContent="Hello 2";


var odd=document.querySelectorAll('li:nth-child(odd)');
console.log(odd);
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='brown';

}
// Traversing THE DOM
var itemsList=document.querySelector('#items');

// parentNode
console.log(itemsList.parentNode);
itemsList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemsList.parentNode.parentNode.parentNode);

// parentElement
console.log(itemsList.parentElement);
itemsList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemsList.parentElement.parentElement.parentElement);

// childNodes
console.log(itemsList.childNodes);

console.log(itemsList.children);
console.log(itemsList.children[1]);
itemsList.children[1].style.backgroundColor='yellow';

// firstChild
console.log(itemsList.firstChild);
console.log(itemsList.firstElementChild);
itemsList.firstElementChild.textContent='Hello 1';

// lastChild
console.log(itemsList.lastChild);
console.log(itemsList.lastElementChild);
itemsList.lastElementChild.textContent='Hello 4';

// nextSilbling
console.log(itemsList.nextSibling);
console.log(itemsList.nextElementSibling);

// previousSibling
console.log(itemsList.previousSibling);
console.log(itemsList.previousElementSibling);
itemsList.previousElementSibling.style.color='green';

// createElement

// Create a div

var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);

var newli= document.createElement('li');
newli.className='hello';
newli.id='hello1';
var newlitext=document.createTextNode('Hello world');
newli.appendChild(newlitext);
console.log(newli);


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');



// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// edit event
itemList.addEventListener('click', editItem);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn=document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.classname='btnedt btn-secondary btn-sm float-right edit';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));
  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


// Edit item
function editItem(e){
  if(e.target.classList.contains('edit')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      
    }
  }
}
