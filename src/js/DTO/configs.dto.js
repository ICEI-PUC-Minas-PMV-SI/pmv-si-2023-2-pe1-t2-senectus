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
			'Primeiro serviço não é uma string',
			'Segundo serviço precisa ser uma string ou nulo',
			'Terceiro serviço precisa ser uma string ou nulo'
		];
		const typeValidation = [
			typeof user.name === 'string',
			typeof user.password === 'string',
			typeof user.job === 'string',
			typeof user.city === 'string',
			typeof user.state === 'string',
			typeof user.value === 'number',
			typeof user.main_services === 'string',
			typeof user.second_services === 'string' || !user.second_services,
			typeof user.third_services === 'string' || !user.third_services
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
			'Número de telefone precisa conter entre 9 a 11 caracteres.',
			'A descrição curta precisa conter entre 6 a 116 caracteres.',
			'A cidade inserida não existe.'
		];
		const searchedCity = availableCities.find((item) => (
			item.city === user.city
		))
		const lengthValidation = [
			user.name.length >= 2 && user.name.length <= 24,
			user.password.length >= 6 && user.password.length <= 256,
			user.phone_number.length >= 9 && user.phone_number.length <= 11,
			user.short_description.length >= 6 && user.short_description.length <= 116,
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
