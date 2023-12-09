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
			setTimeout(() => {
				const res = confirm("Que tal preenchermos suas informações de contato nas configurações? Assim poderemos divulgar seu perfil para nossa base de clientes!");
				if(res) window.location = 'configs.html'
			}, 2500)
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
		const url = `${window.location.pathname}`;
		const token = sessionStorage.getItem('fake-token');

		if(
			token && 
			!url.includes('/configs.html')
		)
			TokenOnSessionStorage.#checkIfProfileIsCompleted(token)
	}
}

TokenOnSessionStorage.checkIfProfileIsCompleted()
