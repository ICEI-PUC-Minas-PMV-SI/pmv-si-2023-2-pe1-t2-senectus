export class DTOError extends Error {
	constructor({ name, message }) {
		super();

		this.name = `Erro no DTO "${name}"`;
		this.message = message;
	}
}
