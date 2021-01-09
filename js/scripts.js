
let pokemonRepository = (function(){

	/*let repository = [	
		{name:'Bulbasaur', height: 0.7, type: 'grass'},
		{name:'Charmander', height: 0.6, type: 'fire'},
		{name:'Nidoran', height: 0.4, type: 'poison'},
		{name:'Vulpix', height: 0.6, type: 'fire'},
		{name:'Jigglypuff', height: 0.5, type: 'fairy'},
		{name:'Raichu', height: 2.07, type:'electric'},
		{name:'Pachirisu', height: 0.4, type:'electric'},
	];*/

	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

	function add(pokemon){
  		if  (
  			typeof pokemon === "object" &&
  			"name" in pokemon //&&
  			//"detailsUrl" in pokemon 
  		) {
  			pokemonList.push(pokemon);
  		} else {
  			console.log("please check pokemon data input");
		}
  	}

  	function getAll(){
  		return pokemonList;
  	}

  	
  	function addListItem(pokemon){
  		let pokemonList = document.querySelector('.pokemon-list'); 
  		let pokemonListItem = document.createElement('li'); 
  		let button = document.createElement('button');
  		button.innerText = pokemon.name; 
  		button.classList.add('button-class');
  		button.addEventListener('click', function(event){
  			showDetails(pokemon);});	
  		pokemonListItem.appendChild(button);
  		pokemonList.appendChild(pokemonListItem);

  	}

  	
  	function loadList(){
  		return fetch(apiUrl).then(function (response) {
  			return response.json();
  		}).then(function (json){
  			json.results.forEach (function (item){
  				let pokemon = {
  					name: item.name,
  					detailsUrl: item.url
  				};
  				add(pokemon);
  			});
  		}).catch (function (e){
  			console.log(e);
  		})
  	}

  	function loadDetails(item){
  		let url=item.detailsUrl;
  		return fetch(url).then(function (response){
  			return response.json();
  		}).then(function (details){
  			item.imageUrl = details.sprites.front_default;
  			item.height = details.height;
  			item.types = details.types;
  		}).catch(function (e){
  			console.log(e);
  		});
  	}

  	function showDetails(pokemon){
  		pokemonRepository.loadDetails(pokemon).then(function (){
  			console.log(pokemon);
  		});
  	}


  	return {
  		add:add,
  		getAll: getAll,
  		addListItem: addListItem,
  		loadList: loadList,
  		loadDetails: loadDetails,
  		showDetails:showDetails
  		
  	};
  })();


  pokemonRepository.loadList().then(function (){
  	pokemonRepository.getAll().forEach(function(pokemon){
  		pokemonRepository.addListItem(pokemon);
  	});
  });
	/*pokemonRepository.getAll().forEach(function(pokemon){
		if (pokemon.height >1.0){
		document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + ')'+' - Wow, that\'s big! </li>');
	}else if(pokemon.height <0.5){
		document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + ')'+' - Ohh, that\'s small! </li>');
	}else{
 	document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + ') </li>');
 	}*/
 

