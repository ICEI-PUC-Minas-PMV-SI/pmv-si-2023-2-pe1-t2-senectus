import { UserMapper } from "../entities/mappers/user.js";
import { TokenOnSessionStorage } from "../entities/repos/sessionStorage/token.js";
import { UserOnLocalStorage } from "../entities/repos/localstorage/user.js";
import { User } from "../entities/user.js";
import { LoginButtonHandler } from "../utils/loginButton.js";
import { IBGEGateway } from "../gateways/APIs/ibge.js";
import { ConfigDTO } from "../DTO/configs.dto.js";
import { popup } from "../events/popup.js"
import { MenuMobile } from "../utils/menuMobile.js";

let availableCities = [];

class Configs {
  events = {
    delete: 'delete-account',
    update: 'update-account'
  };

  definePopupEvents() {
    popup.setAlert({
      name: 'CONTA DELETADA!', 
      eventName: this.events.delete, 
      callback: () => {
        window.location.href = "home.html";
      }
    });
    popup.setAlert({
      name: 'DADOS SALVOS!', 
      eventName: this.events.update
    });
  }

  collectInputsAndSelects() {
    const inputs = document.querySelectorAll("main form fieldset input");
    const job = document.getElementById("select-profession");
    const state = document.getElementById("select-state");
    
    const [
      name,
      password,
      short_description,
      phone_number,
      city,
      price,
      main_services,
      second_services,
      third_services

    ] = [
      inputs[0],
      inputs[1],
      inputs[2],
      inputs[3],
      inputs[4],
      inputs[5],
      inputs[6],
      inputs[7],
      inputs[8]
    ]

    return { 
      name, 
      password, 
      state, 
      city, 
      price, 
      job,
      short_description,
      phone_number,
      main_services,
      second_services,
      third_services
    }
  }

  fillFields(user) {
    const inputsAndSelects = this.collectInputsAndSelects();
    const userInClass = UserMapper.toClass(user);

    inputsAndSelects.name.value = userInClass.name;
    inputsAndSelects.password.value = userInClass.password;
    inputsAndSelects.short_description.value = userInClass.short_description ?? null;
    inputsAndSelects.phone_number.value = userInClass.phone_number ?? null;
    inputsAndSelects.job.value = userInClass.job ?? null;
    inputsAndSelects.city.value = userInClass.city ?? null;
    inputsAndSelects.state.innerHTML = userInClass.state 
      ? `<option value="${userInClass.state}-${userInClass.state_abbr}">${userInClass.state}</option>`
      : null;
    inputsAndSelects.price.value = userInClass.value ?? null;
    inputsAndSelects.main_services.value = userInClass.main_services ?? null;
    inputsAndSelects.second_services.value = userInClass.second_services ?? null;
    inputsAndSelects.third_services.value = userInClass.third_services ?? null;
  }

  deleteAccount(user) {
    TokenOnSessionStorage.delete();
    UserOnLocalStorage.delete(user.id);
      
    window.location.href = "home.html";
  }


  watchDeleteAccountButton(user) {
    const button = document.getElementById("delete-account");

    button.addEventListener("click", () => {
      TokenOnSessionStorage.delete();
      UserOnLocalStorage.delete(user.id);

      popup.dispatch(this.events.delete);
    })
  }

  watchStateSelect(data) {
    const stateSelect = document.getElementById("select-state");
    const cityInput = document.getElementById("input-city")

    stateSelect.addEventListener("change", (event) => {
      cityInput.value = "";
      if(!event.target.value)
        return this.disableCityInput();

      this.enableCityInput();
      this.getCities(data, event.target.value);
    })
  }

  watchForm(oldUser) {
    const form = document.querySelector("main form");

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const inputsAndSelects = this.collectInputsAndSelects();
      const [ state, state_abbr ] = inputsAndSelects.state.value.split("-")
      const user = new User({
        id: oldUser.id,
        name: inputsAndSelects.name.value,
        email: oldUser.email,
        password: inputsAndSelects.password.value,
        phone_number:inputsAndSelects.phone_number.value,
        short_description:inputsAndSelects.short_description.value,
        job: inputsAndSelects.job.value,
        city: inputsAndSelects.city.value,
        state: state,
        state_abbr: state_abbr,
        value: inputsAndSelects.price.value,
        main_services: inputsAndSelects.main_services.value,
        second_services: inputsAndSelects.main_services.value,
        third_services: inputsAndSelects.main_services.value
      });

      try {
        ConfigDTO.validate(user, availableCities);
      } catch(err) {
        alert(err.message);
        throw err
      }

      TokenOnSessionStorage.delete();

      UserOnLocalStorage.update(user);
      TokenOnSessionStorage.create(user);

      popup.dispatch(this.events.update);
    })
  }

  checkAuth() {
    const user = TokenOnSessionStorage.get();
    if(!user) {
      alert("Você não tem permissão para acessar esta página!");
      window.location.href = "login.html";
      throw new Error("Você não tem permissão para acessar esta página!");
    }

    return user;
  }

  getStates(callback) {
    IBGEGateway.getStates()
      .then((data) => {
        const select = document.getElementById("select-state");

        let html = '<option value="">Não selecionado</option>';
        data.forEach((item) => {
          html = html + `
            <option value="${item.state}-${item.abbr}">${item.state}</option>
          `
        });

        select.innerHTML = select.innerHTML + html;

        callback(data);
      });
  }

  getCities(data, targetValue) {
    const { abbr } = data.find((item) => (
      item.abbr === targetValue.split('-')[1]
    ));
  
    IBGEGateway.getCities(abbr)
      .then((data) => {
        availableCities = data;
        const select = document.getElementById("city-list");

        const pr = new Promise((resolve) => {
          let html = '';
          data.forEach((item) => {
            html = html + `
              <option value="${item.city}">${item.city}</option>
            `;
          })

          resolve(html);
        });

        pr.then((html) => {
          select.innerHTML = html;
        })
      });
  }

  disableCityInput() {
    const inputCity = document.getElementById("input-city")
    const cityIcon = document.getElementById("city-input-icon")
    cityIcon.className = "fa-solid fa-circle-xmark"
    inputCity.setAttribute("disabled", "");
  }

  enableCityInput() {
    const inputCity = document.getElementById("input-city")
    const cityIcon = document.getElementById("city-input-icon")
    cityIcon.className = "fa-solid fa-pen-to-square"
    inputCity.removeAttribute("disabled");
  }

  start() {
    const user = this.checkAuth();
    if(user.state)
      this.enableCityInput();

    if(user.city)
      availableCities = [{
		city: user.city,
		abbr: undefined
	  }];

    this.fillFields(user);
    this.definePopupEvents();

    this.getStates((data) => {
      this.watchStateSelect(data);
    });

    this.watchForm(user);
    this.watchDeleteAccountButton(user);
  }
} 

LoginButtonHandler.trySwitchToConfigButton();
MenuMobile.watchMenuButton();
new Configs().start();
