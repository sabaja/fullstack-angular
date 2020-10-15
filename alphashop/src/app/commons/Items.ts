export class Items {

  constructor(
    public codItem: string,
    public description: string,
    public um: string,
    public pieces: number,
    public wight: number,
    public price: number,
    public isActive: boolean,
    public date: Date) {
  }
}
