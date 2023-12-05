import { UUID } from '../utils/randomUUID.js';

export class User {
	#name; 
	#email; 
	#password; 
	#job; 
	#state;
	#state_abbr;
	#phone_number;
	#short_description;
	#city;
	#city_abbr;
	#value; 
	#id; 
	#createdAt;

	constructor({
		id = undefined,
		name, 
		email, 
		password,
		phone_number = undefined,
		short_description = undefined, 
		job = undefined, 
		state = undefined,
		state_abbr = undefined,
		city = undefined,
		city_abbr = undefined,
		value = undefined,
		createdAt = undefined,
	}) {
		this.#id = id ? id : UUID.genV4();
		this.#name = name;
		this.#email = email;
		this.#password = password;
		this.#phone_number = phone_number;
		this.#short_description = short_description;
		this.#job = job;
		this.#state = state;
		this.#state_abbr = state_abbr;
		this.#city = city;
		this.#city_abbr = city_abbr;
		this.#value = value ? parseInt(value) : undefined;
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

	get state() {
		return this.#state;
	}

	get phone_number() {
		return this.#phone_number;
	}

	get short_description() {
		return this.#short_description;
	}
	
	get state_abbr() {
		return this.#state_abbr;
	}

	
	get city() {
		return this.#city;
	}

	get city_abbr() {
		return this.#city_abbr;
	}

	get value() {
		return this.#value 
			? parseInt(this.#value) 
			: undefined;
	}

	get createdAt() {
		return this.#createdAt;
	}
}
