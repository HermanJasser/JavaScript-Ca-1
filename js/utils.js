

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

    const leggTil = document.querySelectorAll(".legg-i-handlekurv");

    for (let add of leggTil) {
    /* if (handlekurv.includes(add.id){

    } */
    add.addEventListener("click", (e)=> {
        e.preventDefault();
        listHandlekurv()
        console.log("test")
    })
    };
  
    export function listHandlekurv() {
        console.log("kjører")
        console.log(handlekurv)
        console.log(handlekurv.includes(this.id))
        if (handlekurv.includes(this.id)) {
            for (let i = 0; i < handlekurv.length; i++) {
                if (handlekurv[i] === this.id) handlekurv.splice(i, 1); 
            }
        } else {
            handlekurv.push(this.id);
            console.log(handlekurv)
        }

        localStorage.setItem("handlekurven", JSON.stringify(handlekurv));
    }

    
    
    console.log(lagringHandlekurv);
    console.log(handlekurv);
