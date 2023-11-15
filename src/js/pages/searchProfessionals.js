import { UserOnLocalStorage } from "../entities/repos/localstorage/user.js"
import { LoginButtonHandler } from "../utils/loginButton.js"

const loggedUserData = LoginButtonHandler.trySwitchToConfigButton();

// limitar o tamanho do email e adicionar um botão de copia e cola

class SearchProfessionals {
  genEmailTemplate = (user) => {
    const subject = encodeURIComponent(`Consulta com ${user.name}`);
    const body = encodeURIComponent(`Estou interessado em agendar uma consulta médica para discutir minhas necessidades de saúde e receber orientações personalizadas. Gostaria de saber mais sobre os serviços que você oferece, suas especialidades e as condições de atendimento.

Por favor, me informe sobre sua disponibilidade, os custos associados e qualquer informação relevante que eu deva estar ciente antes de marcar a consulta.

Agradeço antecipadamente pela sua atenção e aguardo ansiosamente sua resposta.`);
    return `mailto:${user.email}?subject=${subject}&body=${body}`;
  }

  genPopup = (user) => `
    <div id="popup-wrapper-user-card">
      <section id="user-card">
        <h1>${user.name}</h1>
        <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur.</p>
        <span></span>
        <ul id="user-card-info">
          <li>
            <i class="fa-solid fa-envelope"></i>
            <small>${user.email}</small>
          </li>
          <li>
            <i class="fa-solid fa-phone"></i>
            <small>11 1111-1111</small>
          </li>

          <li>
            <i class="fa-solid fa-city"></i>
            <small>${user.city}, ${user.state_abbr}</small>
          </li>

          <li>
            <i class="fa-solid fa-sack-dollar"></i>
            <small>R$${user.value}</small>
          </li> 
        </ul>

        <section id="user-card-options">
          <button id="user-card-rollback" class="outline-colored-button">
            Voltar 
          </button>

          <a href="${this.genEmailTemplate(user)}" class="colored-button">
            <i class="fa-solid fa-calendar"></i>
            Contatar
          </a>
        </section>
      </section>
    </div>
  `

  genLiTag = (user) => `
    <li>
      <small class="specialty">${user.job ?? 'Não informado'}</small>
      <h2>${user.name}</h2>

      <div class="location-and-value">

        <div>
          <i class="fa-solid fa-location-dot"></i>
          <small>${user.state_abbr}</small>
        </div>

        <div>
          <i class="fa-solid fa-sack-dollar"></i>
          <small>R$${user.value}</small>
        </div>

      </div>

      ${
        loggedUserData && loggedUserData.id === user.id 
          ? `<a href="configs" class="colored-button">
                <i class="fa-solid fa-gear"></i>
                  Configurar 
            </a>`
          : `<button id="make-contact" class="colored-button">
                <i class="fa-regular fa-calendar"></i>
                Contatar 
            </button>`
      }
    </li>`

  rollbackButtons = [];

  setEventsOnUserCard(contactButton, user) {
    contactButton.addEventListener("click", () => {
      const pin = document.getElementById("user-card-pin"); 
      pin.innerHTML = this.genPopup(user) + pin.innerHTML;

      const rollbackButton = document.getElementById("user-card-rollback");
      this.rollbackButtons.push(rollbackButton);

      rollbackButton.addEventListener("click", () => { 
         pin.innerHTML = '';
      })
    })
  }

  buildList(max = 9, users) {
    let items = '';
    for(let i=0; i<max; i++) {
      items = items + this.genLiTag(users[i]);
    }

    return items;
  }

  setInitialList() {
    const list = document.getElementById("professionals-list");
    const users = UserOnLocalStorage.getGroupOf(9);
    
    if(loggedUserData) {
      const loggedUserIndex = users.findIndex((item) => (
        item.id === loggedUserData.id
      ));
      users.splice(loggedUserIndex, 1);
    }

    list.innerHTML = this.buildList(users.length, users);

    const buttons = document.querySelectorAll("#professionals-list li #make-contact")
    buttons.forEach((item, index) => {
      this.setEventsOnUserCard(item, users[index]);
    })
  }
  
  watchSelectTag() {
    const select = document.querySelector("#search-bar select");

    select.addEventListener('change', (event) => {
      const job = event.target.value;
      if(job === 'Recentes' || !job)
        return this.setInitialList();

      const list = document.getElementById("professionals-list");
      const users = UserOnLocalStorage.findGroupWithJob(job);
      list.innerHTML = this.buildList(users.length, users);

      this.rollbackButtons.forEach((item) => {
        item.removeEventListener("click", () => {});
        item.remove();
      })

      const buttons = document.querySelectorAll("#professionals-list li #make-contact")
      buttons.forEach((item, index) => {
        this.setEventsOnUserCard(item, users[index]);
      })
    })
  }

  watchForm() {
    const form = document.getElementById("search-bar");

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector("#search-bar input").value;

      const list = document.getElementById("professionals-list");
      const users = UserOnLocalStorage.getGroupWithRegExp(input);
      list.innerHTML = this.buildList(users.length, users);
    })
  }
}

const page = new SearchProfessionals();
page.setInitialList();
page.watchSelectTag();
page.watchForm();
