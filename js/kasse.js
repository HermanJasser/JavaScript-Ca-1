import {getFiltered } from "./utils.js";

let kasseHandlekurvVisning = document.querySelector(".kasse-handlekurv-visning");
let summaryPris = document.querySelector(".summary-pris");

getFiltered(kasseHandlekurvVisning,summaryPris);

/*let gamehubData = [];

async function getFiltered() {
    try {
      const api = `https://v2.api.noroff.dev/gamehub`;
      const response = await fetch(api);
      if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
      const data = await response.json();
      gamehubData = data.data;
  
      const filtered = gamehubData.filter((obj) => {
        return handlekurv.includes(obj.id);
      });
      console.log(filtered);
      listSummary(filtered, kasseHandlekurvVisning);
      finnPris(filtered, summaryPris)

    } catch (error) {
      console.error("Error message: " + error);
      //handlekurvContainer.innerHTML = `<p>Kan ikke finne handlekurven</p>`;
    }
}
getFiltered();


function listSummary(array, container){
    let output = "";
    for(let arr of array){
        output += `<li>${arr.title} ${arr.price}</li>`;
    }

    container.innerHTML = output;
}*/