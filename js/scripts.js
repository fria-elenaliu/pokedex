
let pokemonRepository = (function(){
	let modalContainer = document.querySelector('#modal-container');
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

  	

		function showModal(pokemon){
			modalContainer.innerHTML = '';
						
			let modal = document.createElement('div');
			modal.classList.add('modal');
			
			let closeButtonElement = document.createElement('button');
			closeButtonElement.classList.add('modal-close');
			closeButtonElement.innerText = 'X';
			closeButtonElement.addEventListener('click', hideModal);
	
			let titleElement = document.createElement('h2');
			titleElement.innerText = pokemon.name;
	
			let contentElement = document.createElement('p');
			contentElement.innerText = 'Height: ' + pokemon.height;
	
			let imageContainer = document.querySelector("#img-container")
			let imageElement = document.createElement('img')
			imageElement.src = pokemon.imageUrl;
	
			modal.appendChild(closeButtonElement);
			modal.appendChild(titleElement);
			modal.appendChild(contentElement);
			modal.appendChild(imageElement);
			modalContainer.appendChild(modal);
	
			modalContainer.classList.add('is-visible');
	
		}
	
		function hideModal(){
			modalContainer.classList.remove('is-visible');
		
		}	

		function showDetails(pokemon){
  		pokemonRepository.loadDetails(pokemon).then(function (){
				showModal(pokemon);  			
  		});
		}
	
		document.querySelector('#show-modal').addEventListener('click', () => {
			showModal();
		});

		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape'&& modalContainer.classList.contains('is-visible')){
				hideModal();
			}
		});
	
		modalContainer.addEventListener('click', (e) =>{
			let target=e.target;
			if (target === modalContainer){
				hideModal();
			}
		});
		

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
	
 

