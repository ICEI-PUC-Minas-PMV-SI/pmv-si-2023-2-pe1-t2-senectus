import { UserMapper } from "../../mappers/user.js"
import { Obfuscator } from "../../../utils/obfuscator.js"

export class TokenOnSessionStorage {
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
}
