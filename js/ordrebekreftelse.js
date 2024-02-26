import {getFiltered } from "./utils.js";
let ordreSummaryBekreftelse = document.querySelector(".ordre-summary-bekreftet");
let ordreBekreftelsePris = document.querySelector(".ordre-bekreftelse-pris");



getFiltered(ordreSummaryBekreftelse, ordreBekreftelsePris);
localStorage.clear();


/*
let ferdigBtn = document.getElementById("ferdig");
let logoHomeBtn = document.getElementById("logo-home-btn");

//console.log(ferdigBtn);

ferdigBtn.addEventListener("click", tomHandlekurv);

logoHomeBtn.addEventListener("click", tomHandlekurv);

function tomHandlekurv(){
    localStorage.clear();
}*/