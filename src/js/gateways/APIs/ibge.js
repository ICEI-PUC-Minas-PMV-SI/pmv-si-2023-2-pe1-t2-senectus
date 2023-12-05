export class IBGEGateway {
	static async getStates() {
		const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
		const data = await fetch(url)
		  .then((res) => res.json());

		const states = data.map((item) => {
			return {
				state: item.nome,
				abbr: item.sigla
			}
		})

		return states;
	}

	static async getCities(abbr) {
		const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${abbr}/municipios`;
		const data = await fetch(url)
			.then((res) => res.json())

		const cities = data.map((item) => {
			return {
				city: item.nome,
				abbr: undefined
			};
		});

		return cities;
	}
}
