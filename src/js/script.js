var btn1 = document.getElementById("btn1");  //Найти по Id
var btn2 = document.getElementById("btn2");		//Найти по Id
var main = document.getElementById("main");		//Найти по Id
var myList = document.getElementById("list");	//Найти по Id
var ul = document.getElementsByTagName("ul");	//Найти  тег 
var story = myList.getElementsByClassName("item");	//Найти класс
var popup = document.getElementsByClassName("popup")[0]; //Найти класс
var close = document.querySelector(".close"); //Найти селектор css
var age;
var result=confirm("Данная страница не предназначена лицам младше 18 лет. Вам уже исполнилось 18 лет?");



function addItem(){
	var newLi = document.createElement("li"); // Новый элемент
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item"; //Присвоить класс
	myList.appendChild(newLi); //Добавить дочерний элемент
	popup.style.display = "none";
}
function delItem(){
	myList.removeChild(story[0]);

	if(story.length == 0){
		popup.style.display = "block";
	}
}

function closePopup(){
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);


if(result == true) { 
    console.log("Пользователь старше 18");
    var result1=confirm("Вы подписаны на нашу рассылку?");
    if(result1 == true){
    	console.log("Пользователь подписан на нашу рассылку");
    	console.log("Пользователь допущен");
    } else  {
    alert("Доступ к сайту ограничен");
}
    
} else  {
    alert("Доступ к сайту ограничен");
}