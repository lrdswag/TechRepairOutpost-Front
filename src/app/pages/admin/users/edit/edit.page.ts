import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../../services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  user: User;
  form: FormGroup;

  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      email: ['', Validators.required],
      roles: ['', Validators.required],
      password: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      ContactNumber: ['', Validators.required],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadUserById(id);
  }

  loadUserById(id: string) {
    this.userService.getUserById(id)
      .subscribe((data: User) => this.user = data);
  }

  onEditUser() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.user, ...this.form.value};
        this.userService.editUser(fData)
          .pipe(
            tap(_ => alert('User Updated!')),
            tap(_ => this.router.navigateByUrl(`/admin/users/${_.id}/view`))
          ).subscribe((data: User) => this.user = data);
      }
    }
  }
}
