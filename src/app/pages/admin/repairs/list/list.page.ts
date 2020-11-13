import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RepairsService} from '../../../../services';
import {Repairs} from '../../../../interfaces/repairs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnChanges {

  repairs: Repairs[];

  constructor(
    private repairService: RepairsService
  ) {
    this.loadRepairs();
  }

  ngOnInit() {
    this.loadRepairs();
  }

  loadRepairs() {
    this.repairService.getAllRepairs()
      .subscribe((data: Repairs[]) => this.repairs = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadRepairs();
  }
}
