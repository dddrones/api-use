var xhr = new XMLHttpRequest();
var url = "https://pokeapi.co/api/v2/pokemon/?limit=809"

$("#submit").on("click",function() {
	// ($"body").empty()

// 	query = "&count=3"
// 	callAPI()

// function callAPI () {
// 	var url = url1 + ur12 + url3 + query;

	xhr.open("GET", url, true);
	xhr.send(null);

	xhr.onload = function(){
		if(xhr.status == 200){
			// document.write(xhr.responseText)	

			console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText);
			// console.log(data.results.name)
			var name = data.results[Math.floor((Math.random() * 808)+ 1)].name

			// var ability = data.abilities[0]
			// var sprite = data.sprites
			console.log(data)
			// var name = data[0].url

			// console.log(data.ability)

			$("body").append("<h2>"	+ name +	"</h2>");


}}

var xhr2 = new XMLHttpRequest();
var url2 = "https://pokeapi.co/api/v2/ability/?limit=327"

	xhr2.open("GET", url2, true);
	xhr2.send(null);

	xhr2.onload = function(){
		if(xhr2.status == 200){
			// document.write(xhr.responseText)	

			console.log(xhr2.responseText);
			var data2 = JSON.parse(xhr2.responseText);
			// console.log(data.results.name)
			var ability = data2.results[Math.floor((Math.random() * 326)+ 1)].name

			// var ability = data.abilities[0]
			// var sprite = data.sprites
			console.log(data2)
			// var name = data[0].url

			// console.log(data.ability)
			// $("body").append("<img src="	+ sprite +	">");
			$("body").append("<h3>"	+ ability +	"</h3>");


}
}


var xhr3 = new XMLHttpRequest();
var url3 = "https://pokeapi.co/api/v2/nature/?limit=25"

	xhr3.open("GET", url3, true);
	xhr3.send(null);

	xhr3.onload = function(){
		if(xhr3.status == 200){
			// document.write(xhr.responseText)	

			console.log(xhr3.responseText);
			var data3 = JSON.parse(xhr3.responseText);
			// console.log(data.results.name)
			var nature = data3.results[Math.floor((Math.random() * 24)+ 1)].name

			// var ability = data.abilities[0]
			// var sprite = data.sprites
			console.log(data3)
			// var name = data[0].url

			// $("body").append("<img src="	+ sprite +	">");
			$("body").append("<h3>"	+ nature +	"</h3>");


}
}
})