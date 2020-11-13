import {Injectable} from '@angular/core';
import {CanLoad, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanLoad {

    constructor(
        private authService: AuthenticationService,
        private router: Router,
        private storage: Storage
    ) {
    }

    async getIsAdmin(): Promise<any> {
        try {
            const result = await this.storage.get('roles');
            console.log(result);
            return result;
        } catch (e) {
            console.log(e);
        }
    }

    async canLoad(): Promise<boolean> {
        const value = await this.getIsAdmin();
        if (value.length === 2) {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}
