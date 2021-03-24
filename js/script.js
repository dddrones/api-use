var xhr = new XMLHttpRequest();
var url = "https://pokeapi.co/api/v2/pokemon/?limit=809";

$("#submit").on("click",function() {

	callAPI()

function callAPI () {

	xhr.open("GET", url, true);
	xhr.send(null);

	xhr.onload = function(){
		if(xhr.status == 200){

			// document.write(xhr.responseText)	

			console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText);
			var name = data.results[Math.floor((Math.random() * 808)+ 1)].name

			console.log(data)

			$("#one").text(name);


}}

var xhr2 = new XMLHttpRequest();
var url2 = "https://pokeapi.co/api/v2/ability/?limit=327"

	xhr2.open("GET", url2, true);
	xhr2.send(null);

	xhr2.onload = function(){
		if(xhr2.status == 200){


			console.log(xhr2.responseText);
			var data2 = JSON.parse(xhr2.responseText);
			var ability = data2.results[Math.floor((Math.random() * 326)+ 1)].name

			console.log(data2)

			$("#two").text(ability);


}
}


var xhr3 = new XMLHttpRequest();
var url3 = "https://pokeapi.co/api/v2/nature/?limit=25"

	xhr3.open("GET", url3, true);
	xhr3.send(null);

	xhr3.onload = function(){
		if(xhr3.status == 200){

			console.log(xhr3.responseText);
			var data3 = JSON.parse(xhr3.responseText);
			var nature = data3.results[Math.floor((Math.random() * 24)+ 1)].name

			console.log(data3)

			$("#three").text(nature);


}
}

//this code is by user felix
var randomNum = Math.floor((Math.random()*809)+1);
$('#my_image').attr('src', 'sprites-master/sprites/pokemon/' + randomNum + '.png');



}})
