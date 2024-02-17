import { handlekurv } from "./utils.js";

let handlekurvContainer = document.querySelector(".handlekurv-container");
let prisHandlekurv = document.querySelector(".pris-handlekurv");

function listHandlekurvOnSite(gameById) {
  handlekurvContainer.innerHTML = "";
  let container = "";
  for (let kurvSpill of gameById) {
    container += `<a href="#"><div>
<button class="fjern" id=${kurvSpill.id}>Fjern</button>
<img src="${kurvSpill.image.url}" alt="${kurvSpill.image.alt}">
<p>${kurvSpill.title}</p>
<p>${kurvSpill.price} $</p>
</div></a>`;
  }
  handlekurvContainer.innerHTML = container;

  gameById.forEach((item) => {
    addEventListenerHandlekurv(item.id);
  });
}

let gamehubData = [];
async function getGameInfoWithHandleKurvId() {
  try {
    const api = `https://v2.api.noroff.dev/gamehub`;
    const response = await fetch(api);
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
    const data = await response.json();
    gamehubData = data.data;

    const filtered = gamehubData.filter((obj) => {
      return handlekurv.includes(obj.id);
    });

    //console.log(Filtered);

    listHandlekurvOnSite(filtered);
    finnPris(filtered);
    console.log(filtered);
  } catch (error) {
    console.error("Error message: " + error);
    handlekurvContainer.innerHTML = `<p>Kan ikke finne handlekurven</p>`;
  }
}
getGameInfoWithHandleKurvId();
//console.log(handlekurv);

function oppdaterHandlekurv(id) {
  let oppdatertHandlekurv = localStorage.getItem("handlekurven");
  oppdatertHandlekurv = JSON.parse(oppdatertHandlekurv);
  oppdatertHandlekurv = oppdatertHandlekurv.filter((item) => item !== id);
  return oppdatertHandlekurv;
  //console.log(oppdatertHandlekurv);
}

function addEventListenerHandlekurv(id) {
  let fjern = document.getElementById(id);
  fjern.addEventListener("click", () => {
    let nyHandlekurv = oppdaterHandlekurv(id);
    localStorage.setItem("handlekurven", JSON.stringify(nyHandlekurv));
    window.location.reload();
  });
}


function finnPris(arr) {
    let prisContainer = 0;
    for (let array of arr) {
        prisContainer += array.price;
    }

    if (prisContainer == 0){
        prisContainer = "Handlekurven er tom";
    } else {
        prisContainer = `Total pris: ${prisContainer} $`
    }

        prisHandlekurv.innerHTML = prisContainer;
    

}






