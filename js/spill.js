import {listProductCards} from "./utils.js";

let alleSpillContainer = document.querySelector("div.alle-spill-container");


//console.log(alleSpillContainer);

 let gamehubApi = [];




async function listSpill(container) {
    try{
        const api = `https://v2.api.noroff.dev/gamehub`;
        const response = await fetch(api);
        //console.log(response);
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        gamehubApi = data.data;
        //console.log(gamehubApi);
        listProductCards(gamehubApi, container);

    } catch (error){
        console.error("Error message: " + error)
        container.innerHTML = `<p>Kan ikke finne noen spill</p>`
    }
}

listSpill(alleSpillContainer);


/*********************
 Sortering av spillene
 *********************/

 let velgSortering = document.querySelector("#velg-sortering");
 //console.log(velgSortering);
velgSortering.addEventListener("change", sorterSpill);

 async function sorterSpill(){
     let valgtSortering = velgSortering.value;
    //console.log(valgtSortering);
    let usortertApi = []

    try{

        const api2 = `https://v2.api.noroff.dev/gamehub`;
        const response2 = await fetch(api2);
        //console.log(response2);
        if (!response2.ok) throw new Error(`HTTP error! ${response2.status}`);
        const data2 = await response2.json();
        usortertApi = data2.data;
        //console.log(usortertApi);
        //listProductCards(usortertApi, container);
        if(valgtSortering === "hoyLav") {
            let hoyLavApi = usortertApi.toSorted((a, b) => b.price - a.price);
            //console.log(hoyLavApi);
            listProductCards(hoyLavApi, alleSpillContainer);
        } else if (valgtSortering === "lavHoy"){
            let lavHoyApi = usortertApi.toSorted((a, b) => a.price - b.price);
            //console.log(lavHoyApi);
            listProductCards(lavHoyApi, alleSpillContainer);
        } else if (valgtSortering === "release"){
            let releaseApi = usortertApi.toSorted((a, b) => b.released - a.released);
            //console.log(valgtSortering);
            listProductCards(releaseApi, alleSpillContainer);
        }





    } catch (error){
        console.error("Error message: " + error)
        alleSpillContainer.innerHTML = `<p>Kan ikke finne noen spill</p>`
    }

 }
























