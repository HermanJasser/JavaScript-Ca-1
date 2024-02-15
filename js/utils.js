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
  
  /*************
   handlekurvkode:(
   *************/
  
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
    console.log("kjører");
    console.log(handlekurv.includes(id));
    if (added) {
      handlekurv = handlekurv.filter((item) => item !== id);
    } else {
      handlekurv.push(id);
    }
    localStorage.setItem("handlekurven", JSON.stringify(handlekurv));
    console.log(handlekurv);
  }
  ﻿