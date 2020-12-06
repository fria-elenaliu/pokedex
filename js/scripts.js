/*let pokemonList1 = [];
pokemonList1.name = ['Bulbasaur', 'Charmander', 'Nidoran', 'Vulpix', 'Jigglypuff'];
pokemonList1.height= [0.7, 0.6, 0.4, 0.6, 0.5 ];
pokemonList1.type= ['grass', 'fire', 'poison', 'fire', 'fairy'];*/

let pokemonList = [	
	{name:'Bulbasaur', height: 0.7, type: 'grass'},
	{name:'Charmander', height: 0.6, type: 'fire'},
	{name:'Nidoran', height: 0.4, type: 'poison'},
	{name:'Vulpix', height: 0.6, type: 'fire'},
	{name:'Gigglypuff', height: 0.5, type: 'fairy'},
	{name:'Raichu', height: 2.07, type:'electric'}
	];

let i=0;

 for (let i=0; i<pokemonList.length; i++){
	if (pokemonList[i].height >1.0){
		document.write('<li>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')'+' - Wow, that\'s big! </li>');
	}else if(pokemonList[i].height <0.6){
		document.write('<li>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')'+' - Ohh, that\'s small! </li>');
	}else{
 	document.write('<li>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') </li>');
 	}
 }

