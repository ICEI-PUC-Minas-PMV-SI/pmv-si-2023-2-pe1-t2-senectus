import { UserMapper } from "../../mappers/user.js"
import { Obfuscator } from "../../../utils/obfuscator.js"

export class TokenOnSessionStorage {
	static #checkProfileAndRedirectToConfigs(user) {
		if(
			!user.name ||
			!user.email ||
			!user.password || 
			!user.job ||
			!user.state ||
			!user.state_abbr ||
			!user.phone_number ||
			!user.short_description ||
			!user.city ||
			!user.value ||
			!user.id ||
			!user.createdAt ||
			!user.main_services
		) {
			const res = confirm("Parece que seu perfil não esta completo, que tal terminarmos de configura-lo?");

			if(res) window.location = 'configs.html'
		}
	}
	static #checkIfProfileIsCompleted(token) {
		if(!token) {
			alert("Não autenticado")
			throw new Error("Não autenticado")
		}

		const user = JSON.parse(
			Obfuscator.translate(window.atob(token))
		)

		TokenOnSessionStorage.#checkProfileAndRedirectToConfigs(user)
	}

	static create(user) {
		const userOnObjt = UserMapper.toObject(user);
		const dataString = window.btoa(
			Obfuscator.obfuscate(
				JSON.stringify(userOnObjt)
			)
		);
		const key = `fake-token`;

		sessionStorage.setItem(key, dataString);
	}

	static delete() {
		sessionStorage.removeItem('fake-token');
	}

	static get() {
		const token = sessionStorage.getItem('fake-token');
		return token ? JSON.parse(
			Obfuscator.translate(window.atob(token))
		): null;
	}

	static checkIfProfileIsCompleted() {
		const url = window.location
		const token = sessionStorage.getItem('fake-token');

		if(
			token && 
			(url.pathname !== '/src/configs.html' && 
			url.pathname !== '/configs.html')
		)
			TokenOnSessionStorage.#checkIfProfileIsCompleted(token)
	}
}

TokenOnSessionStorage.checkIfProfileIsCompleted()
