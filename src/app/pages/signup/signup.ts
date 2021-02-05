import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.html',
    styleUrls: ['./signup.scss'],
})
export class SignupPage {
    submitted = false;
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            contactNumber: ['', Validators.required],
            roles: [['ROLE_USER']]
        });
    }

    // onRegister() {
    //     if (this.form.valid) {
    //         if (this.form.dirty) {
    //             const FormData = { ...this.user, ...this.form.value };
    //             this.userService.addUser(FormData)
    //             .pipe(
    //                 tap(_ => console.log('Registered Successfully!')),
    //                 tap(_ => this.router.navigateByUrl('/customer/dashboard'))
    //             ).subscribe((data: User) => this.user = data);
    //         }
    //     }
    // }
}
