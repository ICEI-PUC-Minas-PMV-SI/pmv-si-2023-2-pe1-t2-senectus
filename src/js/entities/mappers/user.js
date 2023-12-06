import { User } from "../user.js"

export class UserMapper {
	static toObject(user) {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			password: user.password,
			short_description: user.short_description,
			phone_number: user.phone_number,
			job: user.job,
			city: user.city,
			city_abbr: user.city_abbr,
			state: user.state,
			state_abbr: user.state_abbr,
			value: user.value,
			createdAt: user.createdAt,
			main_services: user.main_services,
			second_services: user.second_services,
			third_services: user.second_services
		}
	}

	static toClass({
		id,
		name,
		email,
		password,
		short_description,
		phone_number,
		job,
		state,
		state_abbr,
		city,
		city_abbr,		
		value,
		createdAt,
		main_services,
		second_services,
		third_services
	}) {
		return new User({
			id, 
			name, 
			email, 
			password, 
			phone_number,
			short_description,
			job, 
			state,
			state_abbr,
			city,
			city_abbr,
			value,
			createdAt,
			main_services,
			second_services,
			third_services
		});
	}
}
