import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  list = [];
  limit = 10;

  constructor(
    private ds: DataService, 
    private router: Router
  ) { }
  
  ngOnInit() {
    this.list = this.ds.getList();
  }

  detail(item) {
    this.router.navigateByUrl(`/detail/${item.ID}`);
  }

  doInfinite(infiniteScrollEvent) {
    this.limit += 5;
    infiniteScrollEvent.target.complete();
  }
}
