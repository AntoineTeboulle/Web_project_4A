var compt=0;

function returnAnimal(){

	if (document.getElementById('bad1').checked) {

		compt = compt +1;

	}

	if (document.getElementById('bad2').checked) {

		compt = compt +1;

	}

	if (document.getElementById('bad3').checked) {

		compt = compt +1;

	}

	if (document.getElementById('good1').checked) {

		compt = compt - 1;

	}

	if (document.getElementById('good2').checked) {

		compt = compt - 1;

	}

	if (document.getElementById('good3').checked) {

		compt = compt - 1;

	}

	if(compt == -3){


		alert('Your choice have designed you as  :')
		document.getElementById('gentil').src="https://cdn.glitch.com/38b3d561-f00f-4e02-99c7-79a6f6e98038%2Fgentil.png?1536336098103";
			
	}else if(compt == 3){


		alert('Come here... I have something to tell you... You are a bad person. I pretty sure you could sell you re mom for a donut... MAN !!! A DONUT !!!! But that s ok !!! Let me present you a good friend !' )
		document.getElementById('mauvais').src="https://cdn.glitch.com/38b3d561-f00f-4e02-99c7-79a6f6e98038%2Fmauvais.jpg?1536336097426";
			
	}else{

		alert('Wooooh that the first time it happens !!! Nah just kidding here is your result :')
		document.getElementById('normal').src="https://cdn.glitch.com/38b3d561-f00f-4e02-99c7-79a6f6e98038%2Fnormal.png?1536336097706";
	}

}