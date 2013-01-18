// JavaScript Document
    	<!-- VFW Project 2 -->
    	<!-- Joshua Wisecup -->
    	<!-- Term 0113 -->
		


//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){




	//Get ElementById Function
	function $(x){
		var theElement = document.getElementById("x");
		return theElement;
	}
	
	
	//Create select field element and populate with options
	function makeCats() {
		var formTag = document.getElementsByTagName("form"); //formTag is an array
	}
	
	//Variable defaults
	var pebbleGroups = ["--Choose a Type--", "Restaurant", "Gas Station", "Retail Store"];
	
	
	
	//Set Link and Submit Click Events
	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);



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