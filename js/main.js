// JavaScript Document
// VFW Project 2 
// Joshua Wisecup
// Term 0113 
		


//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){


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
	
	function toggleControls(n){
		switch(n){
			case "on":
				$("addPebble").style.display = "none";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "none";
				$("addNew").style.display = "inline";
				break;
			case "off":
				$("addPebble").style.display = "block";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "inline";
				$("addNew").style.display = "none";	
				$("items").style.display = "none";													
				break;
			default:
				return false;
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
	
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0) {
			alert("There is no data in Local Storage.");
		}
		//write data from local storage to the browser
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("items").style.display = "block";													

		for (var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement("li");
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert the string from local storage value back to an object using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement("li");
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}
	
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All pebbles are deleted!");
			window.location.reload();
			return false;
		}
	}
	
	//Variable defaults
	var pebbleGroups = ["--Choose a Type--", "Restaurant", "Gas Station", "Retail Store"],
		favoriteValue = "No"
	;
	makeSelectField();
	
	
	//Set Link and Submit Click Events
	var displayLink = $("displayLink");
	document.getElementById("displayLink").addEventListener("click", getData);
	var clearLink = $("clear");
	document.getElementById("clear").addEventListener("click", clearLocal);
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