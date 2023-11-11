import { TokenOnSessionStorage } from "../entities/repos/sessionStorage/token.js";

export class LoginButtonHandler {
	static buildConfigButton(name) {
		const loginButton = document.getElementById("login-option");
		loginButton.innerHTML = `
			<a href="configs" id="config-button">
          Bem-vindo <span>${name}</span>
			  <i class="fa-solid fa-gear"></i>
			</a>
		`;
	}

	static trySwitchToConfigButton() {
		const user = TokenOnSessionStorage.get();
		if(user)
			LoginButtonHandler.buildConfigButton(user.name);

		return user;
	}
}
