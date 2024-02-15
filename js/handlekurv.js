import {handlekurv} from "./utils.js";

let handlekurvContainer = document.querySelector(".handlekurv-container")

function listHandlekurvOnSite(gameById){
handlekurvContainer.innerHTML = "";
let container = "";
for (let kurvSpill of gameById){
container += `<a href="#"><div>
<button class="fjern" id=${kurvSpill.id}>Fjern</button>
<img src="${kurvSpill.image.url}" alt="${kurvSpill.image.alt}">
<p>${kurvSpill.title}</p>
<p>${kurvSpill.price} $</p>
</div></a>`;

    }
    handlekurvContainer.innerHTML = container;
    
    

}

let gamehubData = [];
async function getGameInfoWithHandleKurvId(){
    try{
        const api = `https://v2.api.noroff.dev/gamehub`;
        const response = await fetch(api);
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        gamehubData = data.data;

        const Filtered = gamehubData.filter((obj)=>{
    
            return handlekurv.includes(obj.id);
        });

        console.log(Filtered);

        listHandlekurvOnSite(Filtered);
       Filtered.forEach((item)=>{
        addEventListenerHandlekurv(item.id, )
       })
        




    } catch (error){
        console.error("Error message: " + error)
        handlekurvContainer.innerHTML = `<p>Kan ikke finne handlekurven</p>`
    }
}
getGameInfoWithHandleKurvId();
//console.log(handlekurv);

function addEventListenerHandlekurv(id) {
    const fjern = document.querySelector(".fjern");
    fjern.addEventListener("click", (e) => {
       // handlekurv = handlekurv.filter((item) => item !== id);
       console.log(id);
      listHandlekurv(id);
    });
  }



