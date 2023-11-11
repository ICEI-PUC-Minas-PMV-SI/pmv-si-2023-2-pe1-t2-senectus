export class UUID {
  static genV4() {
	let uuid = [];
	for(let i=0; i<32; i++) {
		const hex = Math.floor(Math.random() * 16).toString(16);
		uuid.push(hex)
	}

	uuid[12] = '4'
	uuid[16] = 'a'
	uuid.splice(8,0, '-')
	uuid.splice(13,0, '-')
	uuid.splice(18,0, '-')
	uuid.splice(23,0, '-')

	return uuid.join(',').replaceAll(',', '');
  }
}
