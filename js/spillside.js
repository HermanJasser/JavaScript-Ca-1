import { listHandlekurv } from "./utils.js";

let mainSpillSide = document.querySelector("main.main-spillside");
let spillApiById = [];

//console.log(mainSpillside);

let params = new URL(document.location).searchParams;
let id = params.get("id");

let ref = document.referrer;

async function getApiById() {
  try {
    const api = `https://v2.api.noroff.dev/gamehub/${id}`;
    const response = await fetch(api);
    const data = await response.json();

    spillApiById = data.data;
    //console.log(spillApiById);
    lagSpillSide(spillApiById, mainSpillSide);
    addEventListener(id);
  } catch (error) {
    mainSpillSide.innerHTML = `<p>Kan ikke finne spillet du ser etter</p>`;
  }
}
getApiById();

function lagSpillSide(api, output) {
  output.innerHTML = `
  <div class="spillside-left">
  <p><a class="tilbake-knapp" href="${ref}">Tilbake</a></p>
  <h1>${api.title}</h1>
  <img src="${api.image.url}" alt="${api.image.alt}">
  </div>

  <div class="spillside-right">
      <div class="pris-div">
          <p class="nå-pris">${api.price} $</p>
      </div>
      <a class="legg-i-handlekurv" id=${api.id} href="./handlekurv.html">Legg til i handlekurv</a>
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
}

function addEventListener(id) {
  const handleKurvKnapp = document.querySelector(".legg-i-handlekurv");
  handleKurvKnapp.addEventListener("click", (e) => {
    //e.preventDefault();
    listHandlekurv(id);
  });
}
