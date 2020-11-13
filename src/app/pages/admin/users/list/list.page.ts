import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UsersService} from '../../../../services';
import {User} from '../../../../interfaces/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnChanges {

  users: User[];

  constructor(
    private usersService: UsersService
  ) {
    this.loadUsers();
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getAllUsers()
      .subscribe((data: User[]) => this.users = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadUsers();
  }
}
