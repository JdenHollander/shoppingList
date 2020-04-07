var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var li = document.getElementsByTagName("li");


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


listEvent();
addButton();


function inputLength(){
	return input.value.length;
}

//make a li element
function createListElement(){
	var li = document.createElement("li"); //create li
	li.appendChild(document.createTextNode(input.value)); //give li a value of the input value
	ol.appendChild(li); //attache li to the ul element
	input.value = ""; //empty the input

	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.classList.add("btn"); 
	btn.addEventListener('click', deleteLi);
	li.appendChild(btn);

	listEvent();
	
}

//check for input 
function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}
}

//check for input and enter
function addListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

//add an eventlistener to all li elements
function listEvent(){
	for( i=0; i<li.length; i++){
	li[i].addEventListener('click', changeDoneClass)
	}
}

function changeDoneClass(){
	this.classList.toggle('done');
}

function addButton(){
	for( i=0; i<li.length; i++){
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.classList.add("btn"); 
	btn.addEventListener('click', deleteLi);
	}
}

function deleteLi() {
	this.parentNode.remove();
}