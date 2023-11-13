import { UserMapper } from "../entities/mappers/user.js";
import { TokenOnSessionStorage } from "../entities/repos/sessionStorage/token.js";
import { UserOnLocalStorage } from "../entities/repos/localstorage/user.js";
import { User } from "../entities/user.js";
import { LoginButtonHandler } from "../utils/loginButton.js";
import { IBGEGateway } from "../gateways/APIs/ibge.js";
import { ConfigDTO } from "../DTO/configs.dto.js";
import { popup } from "../events/popup.js"

let availableCities = [];

class Configs {
  static definePopupEvents() {
    let eventName = 'delete';
    popup.setAlert('CONTA DELETADA!', eventName, () => {
      window.location.href = "/src/home";
    });

    eventName = 'update';
    popup.setAlert('DADOS SALVOS!', eventName);
  }
  static collectInputsAndSelects() {
    const inputs = document.querySelectorAll("main form fieldset input");
    const job = document.getElementById("select-profession");
    const state = document.getElementById("select-state");
    
    const [
      name,
      password,
      city,
      price 
    ] = [
      inputs[0],
      inputs[1],
      inputs[2],
      inputs[3]
    ]

    return { name, password, state, city, price, job }
  }
  static fillFields(user) {
    const inputsAndSelects = Configs.collectInputsAndSelects();
    const userInClass = UserMapper.toClass(user);

    inputsAndSelects.name.value = userInClass.name;
    inputsAndSelects.password.value = userInClass.password;
    inputsAndSelects.job.value = userInClass.job ?? null;
    inputsAndSelects.city.value = userInClass.city ?? null;
    inputsAndSelects.state.innerHTML = userInClass.state 
      ? `<option value="${userInClass.state}-${userInClass.state_abbr}">${userInClass.state}</option>`
      : null;
    inputsAndSelects.price.value = userInClass.value ?? null;
  }

  static deleteAccount(user) {
    TokenOnSessionStorage.delete();
    UserOnLocalStorage.delete(user.id);
      
    window.location.href = "/src/home";
  }

  static watchDeleteAccountButton(user) {
    const button = document.getElementById("delete-account");

    button.addEventListener("click", () => {
      TokenOnSessionStorage.delete();
      UserOnLocalStorage.delete(user.id);

      popup.emitter.emit('delete');
    })
  }

  static watchStateSelect(data) {
    const stateSelect = document.getElementById("select-state");
    const cityInput = document.getElementById("input-city")

    stateSelect.addEventListener("change", (event) => {
      cityInput.value = "";
      if(!event.target.value)
        return Configs.disableCityInput();

      Configs.enableCityInput();
      Configs.getCities(data, event.target.value);
    })
  }

  static watchForm(oldUser) {
    const form = document.querySelector("main form");

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const inputsAndSelects = Configs.collectInputsAndSelects();
      const [ state, state_abbr ] = inputsAndSelects.state.value.split("-")
      const user = new User({
        id: oldUser.id,
        name: inputsAndSelects.name.value,
        email: oldUser.email,
        password: inputsAndSelects.password.value,
        job: inputsAndSelects.job.value ?? null,
        city: inputsAndSelects.city.value ?? null,
        state: state ?? null,
        state_abbr: state_abbr ?? null,
        value: inputsAndSelects.price.value ?? null
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

      popup.emitter.emit('update');
    })
  }

  static checkAuth() {
    const user = TokenOnSessionStorage.get();
    if(!user) {
      alert("Você não tem permissão para acessar esta página!");
      window.location.href = "login";
      throw new Error("Você não tem permissão para acessar esta página!");
    }

    return user;
  }

  static getStates(callback) {
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

  static getCities(data, targetValue) {
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

  static disableCityInput() {
    const inputCity = document.getElementById("input-city")
    const cityIcon = document.getElementById("city-input-icon")
    cityIcon.className = "fa-solid fa-circle-xmark"
    inputCity.setAttribute("disabled", "");
  }

  static enableCityInput() {
    const inputCity = document.getElementById("input-city")
    const cityIcon = document.getElementById("city-input-icon")
    cityIcon.className = "fa-solid fa-pen-to-square"
    inputCity.removeAttribute("disabled");
  }

  static start() {
    const user = Configs.checkAuth();
    if(user.state)
      Configs.enableCityInput();

    if(user.city)
      availableCities = [{
		city: user.city,
		abbr: undefined
	  }];

    Configs.fillFields(user);
    Configs.definePopupEvents();

    Configs.getStates((data) => {
      Configs.watchStateSelect(data);
    });

    Configs.watchForm(user);
    Configs.watchDeleteAccountButton(user);
  }
} 

LoginButtonHandler.trySwitchToConfigButton();
Configs.start();
