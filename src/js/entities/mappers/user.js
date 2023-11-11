import { User } from "../user.js"

export class UserMapper {
	static toObject(user) {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			password: user.password,
			job: user.job,
			location: user.location,
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
		location,
		value,
		createdAt
	}) {
		return new User(
			id, 
			name, 
			email, 
			password, 
			job, 
			location, 
			value,
			createdAt
		);
	}
}
