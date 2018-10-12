export class Horraire{
	public sens: string;
	public terminus: string;
	public infotrafic: string;
	public temps: string;
  public dernierDepart: string;
  public tempsReel: string;
  public ligne: Ligne;
  public arret:Arretz;
	constructor(values: Object = {}) {

		Object.assign(this, values);
		console.log("test class arret ")
	}
}
