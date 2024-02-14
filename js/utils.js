

export function listProductCards(api, output) {
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
};