import { DTOError } from "./error.js"

export class ConfigDTO {
	static validate(user, availableCities = []) {
		const typeError = [
			'Nome não é uma string',
			'Senha não é uma string',
			'Profissão não é uma string',
			'Cidade não é uma string',
			'Estado não é uma string',
			'Valor por serviço não é um número',
		];
		const typeValidation = [
			typeof user.name === 'string',
			typeof user.password === 'string',
			typeof user.job === 'string',
			typeof user.city === 'string',
			typeof user.state === 'string',
			typeof user.value === 'number'
		];
		typeValidation.forEach((item, index) => {
			if(!item)
				throw new DTOError({
					name: 'ConfigDTO',
					message: typeError[index]
				})
		})

		const lengthAndSearchErrors = [
			'Nome precisa conter entre 2 a 24 caracteres.',
			'Senha precisa conter entre 6 a 256 caracteres.',
			'A cidade inserida não existe.'
		];
		const searchedCity = availableCities.find((item) => (
			item.city === user.city
		))
		const lengthValidation = [
			user.name.length >= 2 && user.name.length <= 24,
			user.password.length >= 6 && user.password.length <= 256,
			searchedCity
		];
		lengthValidation.forEach((item, index) => {
			if(!item)
				throw new DTOError({
					name: 'ConfigDTO',
					message: lengthAndSearchErrors[index]
				})
		})
	}
}
