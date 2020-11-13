import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UsersService} from '../../../../services';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../../interfaces/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit, OnChanges {

  user: User;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadUserById(id);
  }

  loadUserById(id: string) {
    this.usersService.getUserById(id)
      .subscribe((data: User) => this.user = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadUserById(this.user.id);
  }
}
