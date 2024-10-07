// document.getElementById("form").addEventListener('submit',function(event){
//     event.preventDefault();

//     const number=document.getElementById("PokemonNumber").value;
//     const category=document.getElementById("Category").value;

//     fetchpokemoncard(number,category);
// });

// function fetchpokemoncard(number,category){
//     document.getElementById("PokemonContainer").innerHTML=" ";

//     for(let i=1;i<=number;i++){
//         fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//         .then(response=>response.json())
//         .then(data=>{
//             displaypokemoncard(data);
//         })
//         .catch(err=>console.log("Error is ",err))
//     }
// }

// function displaypokemoncard(pokemon){
//     const container=document.getElementById("PokemonContainer");

    
//     const card=document.createElement("div");
//     card.classList.add('pokemon-card');

//     // adding id of pokemon
//     const id=document.createElement('h2');
//     id.innerHTML=pokemon.id;
//     card.appendChild(id);

//     // adding the name of Pokemon
//     const name = document.createElement('h2');
//     name.innerHTML=pokemon.name;
//     card.appendChild(name);
    
//     // adding image of pokemon
//     const image=document.createElement('img');
//     image=pokemon.sprites.front_default;
//     card.appendChild(image);

//     container.appendChild(card);
// }

document.getElementById("form").addEventListener('submit', function(event) {
    event.preventDefault();

    const number = document.getElementById("PokemonNumber").value;
    const category = document.getElementById("Category").value;

    fetchPokemonCards(number, category);
});

function fetchPokemonCards(number, category) {
    const container = document.getElementById("PokemonContainer");
    container.innerHTML = "";

    for(let i = 1; i <= number; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(data => {
                displayPokemonCard(data);
            })
            .catch(err => console.log("Error:", err));
    }
}

function displayPokemonCard(pokemon) {
    const container = document.getElementById("PokemonContainer");
    
    const card = document.createElement("div");
    card.classList.add('pokemon-card');

    // Adding ID of pokemon
    const id = document.createElement('h2');
    id.textContent = `#${pokemon.id}`;
    card.appendChild(id);

    // Adding the name of Pokemon
    const name = document.createElement('h2');
    name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    card.appendChild(name);
    
    // Adding image of pokemon
    const image = document.createElement('img');
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;
    card.appendChild(image);

    container.appendChild(card);
}