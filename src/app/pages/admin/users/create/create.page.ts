import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../../../../services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../interfaces/user';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  user: User;
  form: FormGroup;

  constructor(
    private router: Router,
    private userService: UsersService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      roles: ['', Validators.required],
      password: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      ContactNumber: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onAddUser() {
    if (this.form.valid) {
      if (this.form.dirty) {
        const fData = {...this.user, ...this.form.value};
        this.userService.addUser(fData)
          .pipe(
            tap(_ => alert('User Created!')),
            tap(_ => this.router.navigateByUrl(`/admin/users/${_.id}/view`))
          ).subscribe((data: User) => this.user = data);
      }
    }
  }
}
