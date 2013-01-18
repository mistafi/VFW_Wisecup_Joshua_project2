// JavaScript Document
// VFW Project 2 
// Joshua Wisecup
// Term 0113 
		


//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){
	//alert(localStorage.value(0));


	//Get ElementById Function
	function $(x){
		var theElement = document.getElementById("x");
		return theElement;
	}
	
	
	//Create select field element and populate with options
	function makeSelectField() {
		var formTag = document.getElementsByTagName("form"), //formTag is an array of all the form tags
			selectDiv = $("selectDiv"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "dropdownSelect");
		for(var i=0, j=pebbleGroups.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = pebbleGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		document.getElementById("selectDiv").appendChild(makeSelect);
	}
	
	//Find value of a selected radio button
	function getCheckBoxValue(){
		if($("fav").checked){
			favoriteValue = $("fav").value;
		}else{
			favoriteValue = "No"
		}
	}
	
	function storeData () {
		var id 				= Math.floor(Math.random()*100000001);
		//Gather up our form field values and store in an object
		//Object properties contain an array with form label and input values
		getCheckBoxValue();
		var item			= {};
		item.group			= ["Group:", $("dropdownSelect").value];
		item.inputName		= ["Name:", $("inputName").value];
		item.inputAddress	= ["Address:", $("inputAddress").value];
		item.inputAddress2	= ["Address2:", $("inputAddress2").value];
		item.inputCity		= ["City:", $("inputCity").value];
		item.inputState		= ["State:", $("inputState").value];
		item.inputZip		= ["Zip:", $("inputZip").value];
		item.inputRating	= ["Rating:", $("inputRating").value];
		item.inputDate		= ["Date:", $("inputDate").value];
		//item.inputHidden	= ["Hidden:", $("inputHidden").value];
		item.inputArea		= ["Area:", $("inputArea").value];
		item.inputCheck		= ["Add to Favorites:", favoriteValue];
		
		//Save data into local storage. Use stringify to convert object into a string
		localStorage.setItem(id, JSON.stringify(item));
		alert("Pebble Saved!");
	}
	
	//Variable defaults
	var pebbleGroups = ["--Choose a Type--", "Restaurant", "Gas Station", "Retail Store"],
		favoriteValue = "No"
	;
	makeSelectField();
	
	
	//Set Link and Submit Click Events
/*	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);*/
	var save = $("submit");
	document.getElementById("submit").addEventListener("click", storeData);



});





//var myField = document.getElementById("myText");

//console.log("myField");

//var tags = document.getElementsByTagName("li");

//console.log("tags");


/*var myUlTag = document.createElement("ul");
var myDiv = document.getElementById("mainContent");

var colors = [ "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

myDiv.appendChild(myUlTag);

for(i=0, j=colors.length; i<j; i++) {
	var liTag = document.createElement("li");
	liTag.innerHTML = colors[i];
	if(i%2 == 1){
	liTag.setAttribute = ("class","even");
	}
	myUlTag.appendChild(liTag);
};*/