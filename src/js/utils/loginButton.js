import { TokenOnSessionStorage } from "../entities/repos/sessionStorage/token.js";

export class LoginButtonHandler {
 static buildConfigButton(name) {
  const loginButton = document.getElementById("login-option");
  loginButton.innerHTML = `
   <button href="configs.html" id="config-button">
     Bem-vindo <span>${name}</span>
     <i class="fa-solid fa-gear"></i>
   </button>
  `;

  loginButton.addEventListener("click", () => {
   const configOptions = document.getElementById("config-options-buttons");

   if(!configOptions) {
    loginButton.innerHTML = loginButton.innerHTML + `
     <ul id="config-options-buttons">
      <li>
       <a href="configs.html">Configurações</a>
      </li>
      <li>
       <a id="config-options-logout-button" href="login.html">Desconectar</a>
      </li>
     </ul>
    `;
    const logoutButton = document.getElementById("config-options-logout-button")
    return logoutButton.addEventListener("click", () => {
     TokenOnSessionStorage.delete();
    })
   }

   return configOptions.remove();
  })
 }

 static trySwitchToConfigButton() {
  const user = TokenOnSessionStorage.get();
  if(user)
   LoginButtonHandler.buildConfigButton(user.name);

  return user;
 }
}
