console.log('I love git');

console.log(document.URL);
document.title=123;
console.log(document.head);
console.log(document.domain);
console.log(document.doctype);
console.log(document.getElementById("header-title"));


In textcontent doesn't pay attention to styling but the innertext does.
var headertitle= document.getElementById("header-title"); 
headertitle.style.backgroundColor='black';
var add=document.getElementById("add");
add.innerHTML=<b>"Add Items"</b>
add.style.color='green';
