let alleSpillContainer = document.querySelector("div.alle-spill-container");

//console.log(alleSpillContainer);

 let gamehubApi = [];

 function listProductCards(api, output) {
    output.innerHTML = "";
    let spillContainer = "";
    for(let product of api){
        spillContainer +=`<a class="link-spill-container" href="./spillside.html?id=${product.id}"><div class="spill-container">
                <img src="${product.image.url}" alt="${product.image.alt}">
                <p>${product.title}</p>
                <p class="pris">${product.price} $</p>
            </div></a>`
    }
    output.innerHTML = spillContainer;
}


async function getApi() {
    try{
        const api = `https://v2.api.noroff.dev/gamehub`;
        const response = await fetch(api);
        //console.log(response);
        //Denne eroor meldingen funker ikke
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        gamehubApi = data.data;
        //console.log(gamehubApi);
        listProductCards(gamehubApi, alleSpillContainer);

    } catch (error){
        alleSpillContainer.innerHTML = `<p>Kan ikke finne noen spill</p>`
    }
}

getApi();


let mainSpillSide = document.querySelector("main.main-spillside");
let spillApiById =[];

//console.log(mainSpillside);


let params = new URL(document.location).searchParams;
let id = params.get("id"); 

async function getApiById(){
    try{
        const api = `https://v2.api.noroff.dev/gamehub/${id}`;
        const response = await fetch(api);
        const data = await response.json();
    
        spillApiById = data.data;
        console.log(spillApiById);
        lagSpillSide(spillApiById, mainSpillSide)
    } catch(error){
        mainSpillSide.innerHTML = `<p>Kan ikke finne spillet du ser etter</p>`
    }
}
getApiById();

function lagSpillSide(api, output){
    let spillSideInput =`<div class="spillside-left">
    <h1>${api.title}</h1>
    <img src="${api.image.url}" alt="${api.image.alt}">
    </div>

    <div class="spillside-right">
        <div class="pris-div">
            <p class="nå-pris">${api.price} $</p>
        </div>
        <a href="./handlekurv.html">Legg til i handlekurv</a>
        <section class="produkt-beskrivelse">
            <h2>Produkt beskrivelse</h2>
            <p>${api.description}</p>
            <h2>Spesifikasjoner</h2>
            <ul>
                <li>Aldersgrense: ${api.ageRating}</li>
                <li>Sjanger: ${api.genre}</li>
                <li>Gitt ut i ${api.released}</li>
            </ul>
        </section>
    </div>`;

    output.innerHTML = spillSideInput;
}





