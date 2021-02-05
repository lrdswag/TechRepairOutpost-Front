import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CheckWelcome} from './providers/check-welcome.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module')
      .then(m => m.SupportModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module')
      .then(m => m.AboutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module')
      .then(m => m.SignUpModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomePageModule),
    canLoad: [CheckWelcome]
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module')
      .then(m => m.ServicesPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./pages/bookings/bookings.module')
      .then(m => m.BookingsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module')
      .then(m => m.ContactPageModule)
  },
  {
    path: 'xbox',
    loadChildren: () => import('./pages/console/xbox/xbox.module')
      .then(m => m.XboxPageModule)
  },
  {
    path: 'playstation',
    loadChildren: () => import('./pages/console/playstation/playstation.module')
      .then(m => m.PlaystationPageModule)
  },
  {
    path: 'nintendo',
    loadChildren: () => import('./pages/console/nintendo/nintendo.module')
      .then(m => m.NintendoPageModule)
  },
  {
    path: 'i-mac',
    loadChildren: () => import('./pages/computer/apple/i-mac/i-mac.module')
      .then(m => m.IMacPageModule)
  },
  {
    path: 'macbook',
    loadChildren: () => import('./pages/computer/apple/macbook/macbook.module')
      .then(m => m.MacbookPageModule)
  },
  {
    path: 'pc',
    loadChildren: () => import('./pages/computer/other/pc/pc.module')
      .then(m => m.PcPageModule)
  },
  {
    path: 'laptop',
    loadChildren: () => import('./pages/computer/other/laptop/laptop.module')
      .then(m => m.LaptopPageModule)
  },
  {
    path: 'recovery',
    loadChildren: () => import('./pages/data/recovery/recovery.module')
      .then(m => m.RecoveryPageModule)
  },
  {
    path: 'apple',
    loadChildren: () => import('./pages/computer/apple/apple.module')
      .then(m => m.ApplePageModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./pages/computer/other/other.module')
      .then(m => m.OtherPageModule)
  },
  {
    path: 'mobile',
    loadChildren: () => import('./pages/mobile/mobile.module')
      .then(m => m.MobilePageModule)
  },
  {
    path: 'customer/dashboard',
    loadChildren: () => import('./pages/customer/dashboard/dashboard.module')
        .then( m => m.DashboardPageModule)
  },
  {
    path: 'customer/:id/bookings',
    loadChildren: () => import('./pages/customer/bookings/bookings.module')
        .then( m => m.BookingsPageModule)
  },
  {
    path: 'customer/:id/repairs',
    loadChildren: () => import('./pages/customer/repairs/repairs.module')
        .then( m => m.RepairsPageModule)
  },
  {
    path: 'customer/:id/details',
    loadChildren: () => import('./pages/customer/details/details.module')
        .then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
