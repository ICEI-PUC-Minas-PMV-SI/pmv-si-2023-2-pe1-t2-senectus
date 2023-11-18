import { LoginButtonHandler } from "../utils/loginButton.js";

LoginButtonHandler.trySwitchToConfigButton();

class Home {
  static buildDescriptionModal = () => `
    <span id="description-modal">
      <div>
        <h2>Previne doenças</h2>
        <p>
          A prática continua de exercícios ajuda qualquer indivíduo, principalmente os idosos, a se prevenir de doenças graves, como: câncer, diabete tipo 2 e doenças cardiovasculares.
        </p>
        <button class="colored-button">
          Voltar
        </button>
      </div>
    </span>
  `

  static watchDescriptionButtons() {
    const button = document.querySelectorAll(".benefits-text .colored-button");
    console.log(button)
  }
}

Home.watchDescriptionButtons();
