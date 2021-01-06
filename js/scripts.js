
let pokemonRepository = (function(){

	let repository = [	
		{name:'Bulbasaur', height: 0.7, type: 'grass'},
		{name:'Charmander', height: 0.6, type: 'fire'},
		{name:'Nidoran', height: 0.4, type: 'poison'},
		{name:'Vulpix', height: 0.6, type: 'fire'},
		{name:'Jigglypuff', height: 0.5, type: 'fairy'},
		{name:'Raichu', height: 2.07, type:'electric'},
		{name:'Pachirisu', height: 0.4, type:'electric'},
	];

	function add(pokemon){
  		if  (
  			typeof pokemon === "object" &&
  			"name" in pokemon &&
  			"height" in pokemon &&
  			"type" in pokemon
  		) {
  			repository.push(pokemon);
  		} else {
  			console.log("please check pokemon data input");
		}
  	}

  	function getAll(){
  		return repository;
  	}

  	

  	function addListItem(pokemon){
  		let pokemonList = document.querySelector('.pokemon-list'); 
  		let pokemonListItem = document.createElement('li'); 
  		let button = document.createElement('button');
  		button.innerText = pokemon.name; 
  		button.classList.add('button-class');
  		button.addEventListener('click', showDetails(pokemon));

  		
  		
  		pokemonListItem.appendChild(button);
  		pokemonList.appendChild(pokemonListItem);

  	}

  	function showDetails(pokemon){
  		console.log(pokemon);
  	}



  	return {
  		add:add,
  		getAll: getAll,
  		addListItem: addListItem,
  		showDetails: showDetails
  	};
  })();



  	
  	pokemonRepository.getAll().forEach(function(pokemon){
  		pokemonRepository.addListItem(pokemon);
  		
  	});








	/*pokemonRepository.getAll().forEach(function(pokemon){
		if (pokemon.height >1.0){
		document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + ')'+' - Wow, that\'s big! </li>');
	}else if(pokemon.height <0.5){
		document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + ')'+' - Ohh, that\'s small! </li>');
	}else{
 	document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + ') </li>');
 	}*/
 

