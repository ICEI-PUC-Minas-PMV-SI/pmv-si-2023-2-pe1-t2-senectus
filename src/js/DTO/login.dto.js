import { DTOError } from "./error.js"

export class LoginDTO {
	static validate(email, password) {
		const lengthErrors = [
			'Email precisa conter entre 3 a 256 caracteres.',
			'Senha precisa conter entre 6 a 256 caracteres.'
		];
		const typeError = [
			'Email não é uma frase ou letra',
			'Senha não é uma frase ou letra'
		];

		const typeValidation = [
			typeof email === 'string',
			typeof password === 'string'
		];
		typeValidation.forEach((item, index) => {
			if(!item)
				throw new DTOError({
					name: 'LoginDTO',
					message: typeError[index]
				})
		})

		const lengthValidation = [
			email.length >= 3 && email.length <= 256,
			password.length >= 6 && password.length <= 256
		];
		lengthValidation.forEach((item, index) => {
			if(!item)
				throw new DTOError({
					name: 'LoginDTO',
					message: lengthErrors[index]
				})
		})
	}
}
