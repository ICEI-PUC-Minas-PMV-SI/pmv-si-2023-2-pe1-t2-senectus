import { DTOError } from "./error.js"

export class CreateUserDTO {
	static validate(name, email, password) {
		const lengthErrors = [
			'Nome precisa conter entre 2 a 24 caracteres.',
			'Email precisa conter entre 3 a 256 caracteres.',
			'Senha precisa conter entre 6 a 256 caracteres.'
		];
		const typeError = [
			'Nome não é uma frase ou letra',
			'Email não é uma frase ou letra',
			'Senha não é uma frase ou letra'
		];

		const typeValidation = [
			typeof name === 'string',
			typeof email === 'string',
			typeof password === 'string'
		];
		typeValidation.forEach((item, index) => {
			if(!item)
				throw new DTOError({
					name: 'CreateUserDTO',
					message: typeError[index]
				})
		})

		const lengthValidation = [
			name.length >= 2 && name.length <= 24,
			email.length >= 3 && email.length <= 256,
			password.length >= 6 && password.length <= 256
		];
		lengthValidation.forEach((item, index) => {
			if(!item)
				throw new DTOError({
					name: 'CreateUserDTO',
					message: lengthErrors[index]
				})
		})
	}
}
