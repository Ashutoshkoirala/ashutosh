
   // For project 1
var button = document.getElementById("enter");
var button1 = document.getElementById("reset");

var input = document.getElementById("userInput");
var ul = document.querySelector("ol");

// console.log("Hello");


                   // For project 1
function createlist() {
	// body...
	var li = document.createElement("li");
	var reset =li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value=""; 
		 button1.addEventListener("click", function reset() {
	// body...
	// var li = document.createElement("li");
	reset.remove(li);

})

}


button.addEventListener("click",function anything() {
	// body...
	if (input.value.length > 0) 
	{
	
		createlist()
		
	}
})

input.addEventListener("keypress",function anything() {
	// body...
	if (input.value.length > 0 && event.keyCode===13) 
	{
		createlist();
		
	}
})




								 // For project 2     
var body =document.getElementById("body");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var h3 = document.querySelector("h3")

function gradient() {
	// body...
		body.style.background ="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

		h3.textContent=body.style.background;
		h3.background="green";
}
 color1.addEventListener("input",gradient);
 color2.addEventListener("input",gradient);





// const array =[1,3,5,16];
// const double =[];
// const mewArray = array.forEach((num) => {
// 	double.push(num*2);
// })
// console.log(double);
