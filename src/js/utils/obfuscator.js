export class Obfuscator {
	static obfuscate(input) {
		let output = input.split('');
		for(let i=0; i<input.length; i++) {
			const code = output[i].charCodeAt(0);
			const newPos = code + input.length;
			output[i] = newPos.toString(16);
		}

		return output.join(',').replaceAll(',', '-') + `-${input.length}`;
	}

	static translate(input) {
		const dataArr = input.split('-');

		const realLength = dataArr[dataArr.length - 1];
		dataArr.splice(dataArr.length - 1, 1);

		let output = '';
		for(let i=0; i<dataArr.length; i++) {
			const dataInDesc = parseInt(dataArr[i], 16) - realLength;
			const dataInStr = String.fromCharCode(dataInDesc)
			output = output + dataInStr
		}

        return output;
	}
}
