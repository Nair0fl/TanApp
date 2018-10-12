export class Arret{
	public numLigne: string;
	public typeLigne: string;


	constructor(values: Object = {}) {

		Object.assign(this, values);
		console.log("test class arret ")
	}
}
