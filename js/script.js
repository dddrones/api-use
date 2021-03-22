var xhr = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=E59VpXBeGaT62IUG3cO94dijUoXmCC5kcbmwoNyz"

xhr.open("GET", url, true);
xhr.send(null);

xhr.onload = function(){
	if(xhr.status == 200){

		// document.write(xhr.responseText)

		var nasaData = JSON.parse(xhr.responseText)

		console.log(data)

		if(data.media_type == "video"){
			var youtube = '<iframe width="560" height="315" src="' + data.url + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			// var newVideo = $("<video>")
			// var newSrc = $("<source>")
			// newSrc.attr("type", "video/mp4")
			// newSrc.attr("src", data.url)

			// newVideo.html(newSrc)
			$("body").prepend(youtube)


			 } else if (data.media_type == "image") {

			 var newImage = $("<img>")
			 newImage.attr("src", data.url)
			 $("body").prepend(newImage)
		}

	// 	$("body").prepend("img src='" + nasaData.hdurl + "'>")
	// }
}
}