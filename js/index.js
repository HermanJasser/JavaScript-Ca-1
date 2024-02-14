import {listProductCards} from "./utils.js";


let populareSpill = document.querySelector("div.populære-spill");

//console.log(populareSpill);

let gamehubApi = [];

async function listFavoriteSpill(container) {
    try{
        const api = `https://v2.api.noroff.dev/gamehub`;
        const response = await fetch(api);
        //console.log(response);
        //Denne eroor meldingen funker ikke
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        gamehubApi = data.data;
        //console.log(gamehubApi);

        const favoriteFiltered = gamehubApi.filter((obj)=>{
            return obj.favorite === true;
        });

        listProductCards(favoriteFiltered, container);

    } catch (error){
        console.error("Error message: " + error)
        container.innerHTML = `<p>Kan ikke finne noen spill</p>`
    }
}

listFavoriteSpill(populareSpill);

let hero = document.querySelector(".hero");
let racingApi = [];
async function showHero(container) {
    try{
        const raceApi = `https://v2.api.noroff.dev/gamehub/7d1741d2-71d7-4503-9788-3d0403b41a87/`;
        const response2 = await fetch(raceApi);
        
        if (!response2.ok) throw new Error(`HTTP error! ${response2.status}`);
        const data2 = await response2.json();
        //console.log(data2)
       racingApi = data2.data;
        //console.log(racingApi);
        lagHero(racingApi);


    } catch (error){
        console.error("Error message: " + error);
        container.innerHTML = `<p>Kan ikke finne noe informasjon</p>`;
    }
}

showHero(hero);


function lagHero(api){
    let heroInput =`<img src="${api.image.url}" alt="${api.image.alt}">
    <div>
        <h1>Spar <span class="salg-farge">30%</span> på <br>ukens spill</h1>
        <p>${api.title}</p>
        <a href="./spillside.html?id=${api.id}">LES MER</a>
    </div>`;

    hero.innerHTML = heroInput;
}


