import {Component, OnInit} from '@angular/core';
import {RepairsService} from '../../../../services';
import {ActivatedRoute, Router} from '@angular/router';
import {Repairs} from '../../../../interfaces/repairs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  repair: Repairs;

  constructor(
    private repairService: RepairsService,
    private router: Router,
    private route: ActivatedRoute
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

  onDeleteRepair(id: string) {
    this.repairService.deleteRepair(id)
      .pipe(
        tap(_ => alert('Repair Deleted!')),
        tap(_ => this.router.navigateByUrl('/admin/repairs/list'))
      ).subscribe((data: Repairs) => this.repair = data);
  }
}
