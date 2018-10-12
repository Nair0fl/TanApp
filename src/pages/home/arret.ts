export class Arret{
	public ligne: string[];
	public libelle: string;
	public codeLieu: string;
	public distance: string;


	constructor(values: Object = {}) {

		Object.assign(this, values);
		console.log("test class arret ")
	}
}
