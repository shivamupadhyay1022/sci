import React, { useEffect } from "react";
import './Futurecard.css'

const Futurecard = ({img, name,pos,link})=> {
    useEffect(()=>{
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;
      
        const screen = document.querySelector(".screen"),
          name = document.querySelector(".name");
      
        screen.onmouseenter = (event) => {
          let iteration = 0;
      
          clearInterval(interval);
      
          interval = setInterval(() => {
            name.innerText = name.innerText
              .split("")
              .map((letter, index) => {
                if (index < iteration) {
                  return name.dataset.value[index];
                }
      
                return letters[Math.floor(Math.random() * 26)];
              })
              .join("");
      
            if (iteration >= name.dataset.value.length) {
              clearInterval(interval);
            }
      
            iteration += 1 / 3;
          }, 30);
        };
    })
  


  return (
    <div className="bg-blue-300 rounded-3xl" >
      <div class="screen text-white flex justify-center h-96 items-center">
        <div class="screen-image">
          <img src={img} />
        </div>
        <div class="screen-overlay"></div>
        <div class="screen-content">
          <i class="screen-icon fa-brands fa-codepen"></i>
          <div class="screen-user">
            <p class="name" data-value={name} >
              {name}
            </p>
            <a
              class="link"
              href={link}
              target="_blank"
            >
              {pos}
            </a>
          </div>
        </div>
      </div>

      <div id="blur"></div>

    </div>
  );
}

export default Futurecard;
