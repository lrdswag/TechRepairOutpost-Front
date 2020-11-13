import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Storage} from '@ionic/storage';

export interface TokenResponse {
    data: {
        roles: string;
        id: string;
    };
    token: string;
}

const ID = 'id';
const USER_ROLES = 'roles';
const TOKEN_KEY = 'token';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    tokenResponse: Observable<TokenResponse>;
    isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

    public user: Observable<any>;
    private userData = new BehaviorSubject(null);

    constructor(
        private http: HttpClient,
        private router: Router,
        private alertCtrl: AlertController,
        private storage: Storage
    ) {
    }

    login(email: string, password: string): Observable<TokenResponse> {
        return this.http.post(`${environment.apiUrl}/login`,
            {email, password},
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).pipe(
            tap(async (res: TokenResponse) => {
                if (res) {
                    await this.storage.set(ID, JSON.stringify(res.data.id));
                    await this.storage.set(USER_ROLES, res.data.roles);
                    await this.storage.set(TOKEN_KEY, res.token);
                    this.isAuthenticated.next(true);
                    if (res.data.roles.length === 2) {
                        this.isAdmin.next(true);
                    }
                    this.router.navigateByUrl('/admin');
                } else {
                    const alert = await this.alertCtrl.create({
                        header: 'Login Failed',
                        message: 'The provided email and/or password are incorrect',
                        buttons: ['OK']
                    });
                    await alert.present();
                }
            })
        );
    }

    async logout() {
        this.isAuthenticated.next(false);
        await this.storage.clear();
        await this.router.navigateByUrl('/home');
    }
}
