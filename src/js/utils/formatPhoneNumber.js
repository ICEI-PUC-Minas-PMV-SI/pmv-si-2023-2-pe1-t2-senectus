export class FormatPhoneNumber {
	static format(input) {
		const firstSection = input.slice(-4)
		const secondSection = input.slice(-8, -4)
		const ddd = input.slice(0, input.length - 8)

		return `(${ddd}) ${secondSection}-${firstSection}`
	}
}
