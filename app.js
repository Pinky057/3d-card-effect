// movment for animation to happen
const card = document.querySelector('.card');
const container =document.querySelector('.container');


//Items
const title = document.querySelector(".title");
const shoes = document.querySelector(".shoes img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");



// moving animation event
card.addEventListener('mousemove', (e)=>{

    // console.log(e.pageX, e.pageY);

    let xAxis = (window.innerWidth / 2 - e. pageX)/10;
    let yAxis = (window.innerWidth / 2 - e. pageY)/10;

card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

// animate starts

container.addEventListener('mouseenter', (e)=>{
card.style.transform = "none";
//Popout
title.style.transform = "translateZ(150px)";
shoes.style.transform = "translateZ(200px) rotateZ(45deg)";
description.style.transform = "translateZ(125px)";
sizes.style.transform = "translateZ(100px)";
purchase.style.transform = "translateZ(75px)";
});

//animate ends
container.addEventListener('mouseleave',(e)=>{
    card.style.transform = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
  shoes.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});