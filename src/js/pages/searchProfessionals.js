import { UserOnLocalStorage } from "../entities/repos/localstorage/user.js"
import { LoginButtonHandler } from "../utils/loginButton.js"
import { FormatPhoneNumber } from "../utils/formatPhoneNumber.js"
import { popup } from "../events/popup.js"
import { MenuMobile } from "../utils/menuMobile.js"

class SearchProfessionals {
  loggedUserData = LoginButtonHandler.trySwitchToConfigButton();

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
        <p>${user.short_description}</p>
        <span></span>
        <ul id="user-card-info">
          <li>
            <button id="user-card-email-button">
              <i class="fa-solid fa-envelope"></i>
              <small data-internalValue="${user.email}">${
                user.email.length > 21
                  ? user.email.slice(0, 21) + "..."
                  : user.email
              }</small>
            </button>
          </li>
          <li>
            <button id="user-card-phone-number-button">
              <i class="fa-solid fa-phone"></i>
              <small>${FormatPhoneNumber.format(String(user.phone_number))}</small>
            </button>
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
    </div>`

  genLiTag = (user) => `
    <li>
      <small class="specialty">${user.job ?? 'Não informado'}</small>
      <h2>${user.name}</h2>

      <div class="location-and-value">

        <section>
          <i class="fa-solid fa-location-dot"></i>
          <small>${user.state}, ${user.city}</small>
        </section>

      </div>

    <div id="user-services">
      <h3>Principais serviços</h3>
      <ul>
        <li>
          <i class="fa-solid fa-check"></i>
          <small>${user.main_services}</small>
        </li>
        ${user.second_services && `
            <li>
              <i class="fa-solid fa-check"></i>
              <small>${user.second_services}</small>
            </li>
        `}
        ${user.third_services && `
            <li>
              <i class="fa-solid fa-check"></i>
              <small>${user.third_services}</small>
            </li>
        `}
      </ul>
    </div>


     <button id="make-contact" class="colored-button">
        <i class="fa-regular fa-calendar"></i>
        Contatar 
      </button>
    
    </li>`

  rollbackButtons = [];

  events = {
    userCardEmailButton: "copy-email",
    userCardPhoneNumberButton: "copy-phone-number"
  }

  setEvents() {
    popup.setAlert({
      name: 'COPIADO', 
      eventName: this.events.userCardEmailButton, 
      time: 500
    });
    popup.setAlert({
      name: 'COPIADO', 
      eventName: this.events.userCardPhoneNumberButton,
      time: 500
    });
  }

  setEventsOnUserCard(contactButton, user) {
    contactButton.addEventListener("click", () => {
      const pin = document.getElementById("user-card-pin"); 
      pin.innerHTML = this.genPopup(user) + pin.innerHTML;

      const rollbackButton = document.getElementById("user-card-rollback");
      this.rollbackButtons.push(rollbackButton);

      const emailButton = document.getElementById("user-card-email-button");
      const emailTextValue = document.querySelector(
        "#user-card-email-button small"
      ).dataset.internalvalue;
      emailButton.addEventListener("click", () => {
        popup.dispatch(this.events.userCardEmailButton);
        navigator.clipboard.writeText(emailTextValue);
      });


      const phoneButton = document.getElementById("user-card-phone-number-button");
      const phoneTextValue = document.querySelector(
        "#user-card-phone-number-button small"
      ).textContent;
      phoneButton.addEventListener("click", () => {
        popup.dispatch(this.events.userCardPhoneNumberButton);
        navigator.clipboard.writeText(phoneTextValue);
      });

      rollbackButton.addEventListener("click", () => { 
         pin.innerHTML = '';
         rollbackButton.removeEventListener("click", () => {});
         phoneButton.removeEventListener("click", () => {});
         emailButton.removeEventListener("click", () => {});
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
    let users = UserOnLocalStorage.getGroupOf(9);
    users = users.filter((item) => (
      item.value &&
      item.city &&
      item.state &&
      item.state_abbr &&
      item.job &&
      item.phone_number &&
      item.short_description &&
      item.main_services
    ));
    
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
      let users = UserOnLocalStorage.findGroupWithJob(job);
      users = users.filter((item) => (
        item.value &&
        item.city &&
        item.state &&
        item.state_abbr &&
        item.job &&
        item.phone_number &&
        item.short_description &&
        item.main_services
      ));
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
      let users = UserOnLocalStorage.getGroupWithRegExp(input);
      users = users.filter((item) => (
        item.value &&
        item.city &&
        item.state &&
        item.state_abbr &&
        item.job &&
        item.phone_number &&
        item.short_description &&
        item.main_services
      ));
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

  start() {
    this.setEvents();
    this.setInitialList();
    this.watchSelectTag();
    this.watchForm();
  }
}

new SearchProfessionals().start();
MenuMobile.watchMenuButton();
