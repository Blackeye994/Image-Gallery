let array = ["Gallery images/card1img.jpeg", "Gallery images/card2img.jpeg", "Gallery images/card3img.jpeg", "Gallery images/card4img.jpeg"];
let count = 1;
let input = document.querySelector("input");
let container = document.querySelector(".container");
let Local_img = document.querySelector(".Local_img");
let WhatSapp = document.querySelector(".whatsapp_img");
let Face_img = document.querySelector(".facebook_img");
let download_img = document.querySelector(".download_img");
let images = document.querySelectorAll(".images");
let local = document.querySelector(".Local");
let body = document.querySelector("body");

input.addEventListener("change", () => {
    container.classList.toggle("ctn_color");
});

Local_img.addEventListener("click", () => {
    console.log("Local image is clicked");
    // container.style.visibility ="hidden";
    // body.classList.add("Local_container");
    // for(new_img of array){
    //     console.log(new_img);
    //     local.src = new_img;
    // }

});