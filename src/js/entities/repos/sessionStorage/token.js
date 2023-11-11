import { UserMapper } from "../../mappers/user.js"

export class TokenOnSessionStorage {
	static create(user) {
		const userOnObjt = UserMapper.toObject(user);
		const dataString = window.btoa(JSON.stringify(userOnObjt));
		const key = `fake-token`;

		sessionStorage.setItem(key, dataString);
	}

	static delete() {
		sessionStorage.removeItem('fake-token');
	}

	static get() {
		const token = sessionStorage.getItem('fake-token');
		return token ? JSON.parse(window.atob(token)) : null;
	}
}
