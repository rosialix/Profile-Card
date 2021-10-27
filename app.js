
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//Disparado cuando el html ha sido completado
  document.addEventListener("DOMContentLoaded", () => {
    const ramdom = getRandomInt(1, 152);
    pokemonData(ramdom);
  });

//capturar datos de la API
const pokemonData = async (id) => {
    try {
  
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
    
  
      const pokemon = {
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        imgJuego: data.sprites.front_default,
        imgCvg: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
      };
      pintarCard(pokemon);
    } catch (error) {
      console.log(error);
    }
  };

  const pintarCard = (pokemon) => {
    //capturo el contenido del main id="contenedor"
    const contenedor1 = document.querySelector("#contenedor");
    //Clono el contenedor
    const clone1 = contenedor1.cloneNode(true);
    //Crear Fragment
    const fragment = document.createDocumentFragment();
    console.log(clone1)
 
    // clone.querySelector(".foto_img").setAttribute("src", pokemon.imgCvg);
    // // clone.querySelector('.card-body-img').setAttribute('src', pokemon.imgJuego)
    // clone.querySelector(
    //   ".name"
    // ).innerHTML = `${pokemon.nombre} <span>${pokemon.hp}hp</span>`;
    // clone.querySelector(".card-body-text").textContent =
    //   pokemon.experiencia + " exp";
    // clone.querySelectorAll(".datos h2")[0].textContent =
    //   pokemon.ataque + "K";
    // clone.querySelectorAll(".datos h2")[1].textContent =
    //   pokemon.especial + "K";
    // clone.querySelectorAll(".datos h2")[2].textContent =
    //   pokemon.defensa + "K";

    //inserto en el contenedor (main) codigo html para mostrar la card
       clone1.insertAdjacentHTML("afterbegin",
       `<article class="card">
        <div class="foto">
                <img class="foto_img" src=${pokemon.imgCvg} alt="">
                <h1 class="name">${pokemon.nombre}<span class="age">${pokemon.hp}hp</span></h1>
                <hr>
                <p class="card-body-text">${pokemon.experiencia} exp</p>
       </div>
       <hr>
        <div class="datos">
                <div class="datos_">
                        <h2>${pokemon.ataque} K</h2>
                        <p>Ataque</p>
                </div>
                <div class="datos_">
                        <h2>${pokemon.especial} K</h2>
                        <p>Ataque Especial</p>
                </div>
                <div class="datos_">
                        <h2>${pokemon.defensa} K</h2>
                        <p>Defensa</p>
                </div>
        </div>
      </article>
`);



  
    // fragment.appendChild(clone);
    // contenedor.appendChild(fragment);

      fragment.appendChild(clone1);
      contenedor1.appendChild(fragment);
  };
//   const pintarCard = (pokemon) => {
//     const flex = document.querySelector(".flex");
//     const template = document.getElementById("card").content;
//     const clone = template.cloneNode(true);
//     const fragment = document.createDocumentFragment();
  
//     clone.querySelector(".card-body-img").setAttribute("src", pokemon.imgCvg);
//     // clone.querySelector('.card-body-img').setAttribute('src', pokemon.imgJuego)
//     clone.querySelector(
//       ".card-body-title"
//     ).innerHTML = `${pokemon.nombre} <span>${pokemon.hp}hp</span>`;
//     clone.querySelector(".card-body-text").textContent =
//       pokemon.experiencia + " exp";
//     clone.querySelectorAll(".card-footer-social h3")[0].textContent =
//       pokemon.ataque + "K";
//     clone.querySelectorAll(".card-footer-social h3")[1].textContent =
//       pokemon.especial + "K";
//     clone.querySelectorAll(".card-footer-social h3")[2].textContent =
//       pokemon.defensa + "K";
  
//     fragment.appendChild(clone);
//     flex.appendChild(fragment);
//   };
