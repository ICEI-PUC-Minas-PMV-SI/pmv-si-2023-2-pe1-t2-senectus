import { User } from "../user.js"

export class UserMapper {
	static toObject(user) {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			password: user.password,
			job: user.job,
			city: user.city,
			city_abbr: user.city_abbr,
			state: user.state,
			state_abbr: user.state_abbr,
			value: user.value,
			createdAt: user.createdAt
		}
	}

	static toClass({
		id,
		name,
		email,
		password,
		job,
		state,
		state_abbr,
		city,
		city_abbr,		
		value,
		createdAt
	}) {
		return new User({
			id: id, 
			name: name, 
			email: email, 
			password: password, 
			job: job, 
			state: state,
			state_abbr: state_abbr,
			city: city,
			city_abbr: city_abbr,
			value: value,
			createdAt: createdAt
		});
	}
}
