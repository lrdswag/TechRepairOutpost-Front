import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RepairsService} from '../../../../services';
import {Repairs} from '../../../../interfaces/repairs';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit, OnChanges {

  repair: Repairs;

  constructor(
    private route: ActivatedRoute,
    private repairService: RepairsService,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadRepairById(id);
  }

  loadRepairById(id: string) {
    this.repairService.getRepairById(id)
      .subscribe((data: Repairs) => this.repair = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadRepairById(this.repair.id);
  }
}
