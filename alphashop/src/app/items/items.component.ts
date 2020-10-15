import {Component, OnInit} from '@angular/core';

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


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Items[] = [
    new Items('014600301', 'BARILLA FARINA 1 KG', 'PZ', 24, 1, 1.09, true, new Date()),
    new Items('013500121', 'BARILLA PASTA GR.500 N.70 1/2 PENNE', 'PZ', 30, 0.5, 1.3, true, new Date()),
    new Items('007686402', 'FINDUS FIOR DI NASELLO 300 GR', 'PZ', 8, 0.3, 6.46, true, new Date()),
    new Items('057549001', 'FINDUS CROCCOLE 400 GR', 'PZ', 12, 0.4, 5.97, true, new Date())
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
