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
