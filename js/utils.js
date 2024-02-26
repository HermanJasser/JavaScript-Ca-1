export function listProductCards(api, output) {
    output.innerHTML = "";
    let spillContainer = "";
    for (let product of api) {
      spillContainer += `<a class="link-spill-container" href="./spillside.html?id=${product.id}"><div class="spill-container">
                  <img src="${product.image.url}" alt="${product.image.alt}">
                  <p>${product.title}</p>
                  <p class="pris">${product.price} $</p>
              </div></a>`;
    }
    output.innerHTML = spillContainer;
  }
  
  export let handlekurv;
  
  export const lagringHandlekurv = localStorage.getItem("handlekurven");
  if (!lagringHandlekurv) {
    handlekurv = [];
    localStorage.setItem("handlekurven", JSON.stringify(handlekurv));
  } else {
    handlekurv = JSON.parse(lagringHandlekurv);
  }
  
  export function listHandlekurv(id) {
    let added = false;
    if (handlekurv.includes(id)) {
      added = true;
    }
    //console.log("kjører");
    //console.log(handlekurv.includes(id));
    if (added === true) {
      handlekurv = handlekurv.filter((item) => item !== id);
    } else {
      handlekurv.push(id);

    }
    localStorage.setItem("handlekurven", JSON.stringify(handlekurv));
    //console.log(handlekurv);
  }

  export function finnPris(arr, container) {
    let prisContainer = 0;
    for (let array of arr) {
        prisContainer += array.price;
    }

    if (prisContainer == 0){
        prisContainer = "Handlekurven er tom";
    } else {
        prisContainer = `Total pris: ${prisContainer} $`
    }

        container.innerHTML = prisContainer; 
}

let gamehubData = [];

export async function getFiltered(containerProduct, containerPris) {
  try {
    const api = `https://v2.api.noroff.dev/gamehub`;
    const response = await fetch(api);
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
    const data = await response.json();
    gamehubData = data.data;

    const filtered = gamehubData.filter((obj) => {
      return handlekurv.includes(obj.id);
    });
    //console.log(filtered);
    listSummary(filtered, containerProduct);
    finnPris(filtered, containerPris)

  } catch (error) {
    console.error("Error message: " + error);
    //handlekurvContainer.innerHTML = `<p>Kan ikke finne handlekurven</p>`;
  }
}


function listSummary(array, container){
  let output = "";
  for(let arr of array){
      output += `<li>${arr.title} ${arr.price}</li>`;
  }

  container.innerHTML = output;
}