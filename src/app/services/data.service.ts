import { Injectable } from '@angular/core';

export interface vote {
  ID: number,
  FirstName: string,
  LastName: string,
  Age: number,
  Politics: string,
  Vote: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  list: vote[] = [];

  constructor() {
    this.list = [
      {ID:1, FirstName:'陳', LastName: '家豪', Age: 20, Politics: '我叫陳家豪，請投我一票～', Vote: 0},
      {ID:2, FirstName:'常', LastName: '洺瑋', Age: 21, Politics: '我叫常洺瑋，請投我一票～', Vote: 0},
      {ID:3, FirstName:'賴', LastName: '仟綉', Age: 20, Politics: '我叫賴仟綉，請投我一票～', Vote: 0},
      {ID:4, FirstName:'陳', LastName: '彥伊', Age: 20, Politics: '我叫陳彥伊，請投我一票～', Vote: 0},
      {ID:4, FirstName:'黃', LastName: '鈺婷', Age: 20, Politics: '我叫黃鈺婷，請投我一票～', Vote: 0}
    ];
  }

  getList() {
    return this.list;
  }

  getItem(id):vote {
    return this.list.find(e=>{return e.ID===id});
  }
}
