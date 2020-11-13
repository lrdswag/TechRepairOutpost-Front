import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../../../services';
import {User} from '../../../../interfaces/user';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadUserById(id);
  }

  loadUserById(id: string) {
    this.userService.getUserById(id)
      .subscribe((data: User) => this.user = data);
  }

  onDeleteUser(id: string) {
    this.userService.deleteUser(id)
      .pipe(
        tap(_ => alert('User Deleted!')),
        tap(_ => this.router.navigateByUrl('/admin/users/list'))
      ).subscribe((data: User) => this.user = data);
  }
}
