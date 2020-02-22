
function getDogImage(){
	let num = $('input[type=number]').val();;
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
    	showMeTheDoggo(responseJson));
}


function submitForDoggo(){
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  })
}
function showMeTheDoggo(responseJson){
	console.log(responseJson)
	$('main').empty();
	for (let i = 0; i < responseJson.message.length; i++){
		$('main').append(`<img src="${responseJson.message[i]}" class="sizing" alt="picture of a Dog">`);
	}	
}
submitForDoggo()