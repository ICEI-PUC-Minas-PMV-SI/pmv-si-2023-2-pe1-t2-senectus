import { UserOnLocalStorage } from "../entities/repos/localstorage/user.js"
import { LoginButtonHandler } from "../utils/loginButton.js"

const loggedUserData = LoginButtonHandler.trySwitchToConfigButton();

export class SearchProfessionals {
  static genLiTag = (user) => `
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
          : `<button class="colored-button">
                <i class="fa-regular fa-calendar"></i>
                Contatar 
            </button>`
      }
    </li>`

  static buildList(max = 9, users) {
    let items = '';
    for(let i=0; i<max; i++) {
      items = items + SearchProfessionals.genLiTag(users[i]);
    }

    return items;
  }

  static setInitialList() {
    const list = document.getElementById("professionals-list");
    const users = UserOnLocalStorage.getGroupOf(9);
    list.innerHTML = SearchProfessionals.buildList(users.length, users);
  }
  
  static watchSelectTag() {
    const select = document.querySelector("#search-bar select");

    select.addEventListener('change', (event) => {
      const job = event.target.value;
      if(job === 'Recentes' || !job)
        return SearchProfessionals.setInitialList();

      const list = document.getElementById("professionals-list");
      const users = UserOnLocalStorage.findGroupWithJob(job);
      list.innerHTML = SearchProfessionals.buildList(users.length, users);
    })
  }

  static watchForm() {
    const form = document.getElementById("search-bar");

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector("#search-bar input").value;

      const list = document.getElementById("professionals-list");
      const users = UserOnLocalStorage.getGroupWithRegExp(input);
      list.innerHTML = SearchProfessionals.buildList(users.length, users);
    })
  }
}

SearchProfessionals.setInitialList();
SearchProfessionals.watchSelectTag();
SearchProfessionals.watchForm();
