import { UUID } from '../utils/randomUUID.js';

export class User {
	#name; #email; #password; #job; #location; #value; #id; #createdAt;

	constructor(
		id = undefined,
		name, 
		email, 
		password, 
		job = undefined, 
		location = undefined, 
		value = undefined,
		createdAt = undefined
	) {
		this.#id = id ? id : UUID.genV4();
		this.#name = name;
		this.#email = email;
		this.#password = password;
		this.#job = job;
		this.#location = location;
		this.#value = value ? parseInt(value) : null;
		this.#createdAt = createdAt ?? new Date();
	}

	get id() {
		return this.#id;
	}

	get name() {
		return this.#name;
	}

	get email() {
		return this.#email;
	}

	get password() {
		return this.#password;
	}

	get job() {
		return this.#job;
	}

	get location() {
		return this.#location;
	}

	get value() {
		return this.#value 
			? parseInt(this.#value) 
			: null;
	}

	get createdAt() {
		return this.#createdAt;
	}
}
