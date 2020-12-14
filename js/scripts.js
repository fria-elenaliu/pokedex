
let pokemonRepository = (function(){

	let pokemonList = [	
		{name:'Bulbasaur', height: 0.7, type: 'grass'},
		{name:'Charmander', height: 0.6, type: 'fire'},
		{name:'Nidoran', height: 0.4, type: 'poison'},
		{name:'Vulpix', height: 0.6, type: 'fire'},
		{name:'Gigglypuff', height: 0.5, type: 'fairy'},
		{name:'Raichu', height: 2.07, type:'electric'},
		{name:'Pachirisu', height: 0.4, type:'electric'},
	];

	function getAll(){
  		return pokemonList;
  	}

  	function add(pokemon){
  		pokemonList.push(pokemon);
  	}

  	return{
  		getAll: getAll,
  		add: add
  	};
  })();

pokemonRepository.add({name:'Buneary', height: 1.4, type:'normal'})

pokemonRepository.getAll().forEach(function(pokemon){
	if (pokemon.height >1.0){
		document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + ')'+' - Wow, that\'s big! </li>');
	}else if(pokemon.height <0.5){
		document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + ')'+' - Ohh, that\'s small! </li>');
	}else{
 	document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + ') </li>');
 	}
 });

