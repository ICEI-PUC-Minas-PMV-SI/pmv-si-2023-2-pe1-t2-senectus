import "../entities/repos/localstorage/seed.js"

import { LoginButtonHandler } from "../utils/loginButton.js";
import { MenuMobile } from "../utils/menuMobile.js";

LoginButtonHandler.trySwitchToConfigButton();

class Home {
  static buildDescriptionModal = (name, description) => `
      <div id="description-modal">
        <section>
          <h2>${name}</h2>
          <p>${description}</p>
          <button id="modal-rollback" class="colored-button">
            Voltar
          </button>
        </section>
      </div>
      `

      static watchRollbackButton(spanTag) {
      const button = document.getElementById("modal-rollback");

      button.addEventListener("click", () => {
        spanTag.innerHTML = ""
        button.removeEventListener("click", () => {})

      })
    }
   
  static watchDescriptionButtons() {
    const possibleModalsData = [
        {
            name: "Previne doenças",
            description:" A prática continua de exercícios ajuda qualquer indivíduo, principalmente os idosos, a se prevenir de doenças graves, como: câncer, diabete tipo 2 e doenças cardiovasculares."
        },
        {
            name: "Coordenação motora",
            description:"O sedentarismo em idosos sempre esteve associado como um dos responsáveis pelo declínio cognitivo dos mesmos. Uma maneira de prevenir este problema é uma boa prática diária de exercícios."
        },
        {
            name: "Redução de lesões",
            description: "O sedentarismo pode aumentar a probabilidade de lesões mais graves entre os idosos, como uma forma de evitar isto, a prática de exercícios acompanhados por profissionais é mais que importante!"
        },
        {
            name: "Ganho de massa muscular",
            description: "A prática de atividades física sempre foram responsáveis pelo aumento de massa muscular, isso além de, na grande maioria das vezes, melhorar a sua estética, aprimora o seu rendimento físico."
        },
        {
            name: "Saúde mental",
            description: "Além de tudo isso, a prática de exercícios te traz uma grande e benéfica injeção de ânimo, além de aprimorar a sua autoestima e autoconfiança!",
        }
        
    ]
    const buttons = document.querySelectorAll(".benefits-text .colored-button");
    const span = document.getElementById("pin-modal")
    
        for(let index=0; index<buttons.length-1; index++) {
        buttons[index].addEventListener("click", () => {
          span.innerHTML =  Home.buildDescriptionModal(
          possibleModalsData[index].name,
          possibleModalsData[index].description
        );
        Home.watchRollbackButton(span);
       })
      }
   } 
}

MenuMobile.watchMenuButton();
Home.watchDescriptionButtons();
