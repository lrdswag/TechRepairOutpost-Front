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
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module')
      .then(m => m.AdminPageModule)
  },
  {
    path: 'admin/inventory',
    loadChildren: () => import('./pages/admin/inventory/inventory.module')
      .then(m => m.InventoryPageModule)
  },
  {
    path: 'admin/inventory/create',
    loadChildren: () => import('./pages/admin/inventory/create/create.module')
      .then(m => m.CreatePageModule)
  },
  {
    path: 'admin/inventory/list',
    loadChildren: () => import('./pages/admin/inventory/list/list.module')
      .then(m => m.ListPageModule)
  },
  {
    path: 'admin/inventory/stock-available',
    loadChildren: () => import('./pages/admin/inventory/stock-available/stock-available.module')
      .then( m => m.StockAvailablePageModule)
  },
  {
    path: 'admin/inventory/requires-ordering',
    loadChildren: () => import('./pages/admin/inventory/requires-ordering/requires-ordering.module')
      .then( m => m.RequiresOrderingPageModule)
  },
  {
    path: 'admin/inventory/:id/view',
    loadChildren: () => import('./pages/admin/inventory/view/view.module')
      .then(m => m.ViewPageModule)
  },
  {
    path: 'admin/inventory/:id/edit',
    loadChildren: () => import('./pages/admin/inventory/edit/edit.module')
      .then(m => m.EditPageModule)
  },
  {
    path: 'admin/inventory/:id/delete',
    loadChildren: () => import('./pages/admin/inventory/delete/delete.module')
      .then(m => m.DeletePageModule)
  },
  {
    path: 'admin/suppliers',
    loadChildren: () => import('./pages/admin/suppliers/suppliers.module')
      .then(m => m.SuppliersPageModule)
  },
  {
    path: 'admin/suppliers/create',
    loadChildren: () => import('./pages/admin/suppliers/create/create.module')
      .then(m => m.CreatePageModule)
  },
  {
    path: 'admin/suppliers/list',
    loadChildren: () => import('./pages/admin/suppliers/list/list.module')
      .then(m => m.ListPageModule)
  },
  {
    path: 'admin/suppliers/:id/view',
    loadChildren: () => import('./pages/admin/suppliers/view/view.module')
      .then(m => m.ViewPageModule)
  },
  {
    path: 'admin/suppliers/:id/edit',
    loadChildren: () => import('./pages/admin/suppliers/edit/edit.module')
      .then(m => m.EditPageModule)
  },
  {
    path: 'admin/suppliers/:id/delete',
    loadChildren: () => import('./pages/admin/suppliers/delete/delete.module')
      .then(m => m.DeletePageModule)
  },
  {
    path: 'admin/suppliers/:id/parts',
    loadChildren: () => import('./pages/admin/suppliers/parts-offered/parts-offered.module')
        .then( m => m.PartsOfferedPageModule)
  },
  {
    path: 'admin/purchase-orders',
    loadChildren: () => import('./pages/admin/purchase-orders/purchase-orders.module')
      .then(m => m.PurchaseOrdersPageModule)
  },
  {
    path: 'admin/purchase-orders/create',
    loadChildren: () => import('./pages/admin/purchase-orders/create/create.module')
      .then(m => m.CreatePageModule)
  },
  {
    path: 'admin/purchase-orders/list',
    loadChildren: () => import('./pages/admin/purchase-orders/list/list.module')
      .then(m => m.ListPageModule)
  },
  {
    path: 'admin/purchase-orders/:id/view',
    loadChildren: () => import('./pages/admin/purchase-orders/view/view.module')
      .then(m => m.ViewPageModule)
  },
  {
    path: 'admin/purchase-orders/:id/edit',
    loadChildren: () => import('./pages/admin/purchase-orders/edit/edit.module')
      .then(m => m.EditPageModule)
  },
  {
    path: 'admin/purchase-orders/:id/delete',
    loadChildren: () => import('./pages/admin/purchase-orders/delete/delete.module')
      .then(m => m.DeletePageModule)
  },
  {
    path: 'admin/users',
    loadChildren: () => import('./pages/admin/users/users.module')
      .then(m => m.UsersPageModule)
  },
  {
    path: 'admin/users/create',
    loadChildren: () => import('./pages/admin/users/create/create.module')
      .then(m => m.CreatePageModule)
  },
  {
    path: 'admin/users/list',
    loadChildren: () => import('./pages/admin/users/list/list.module')
      .then(m => m.ListPageModule)
  },
  {
    path: 'admin/users/:id/view',
    loadChildren: () => import('./pages/admin/users/view/view.module')
      .then(m => m.ViewPageModule)
  },
  {
    path: 'admin/users/:id/edit',
    loadChildren: () => import('./pages/admin/users/edit/edit.module')
      .then(m => m.EditPageModule)
  },
  {
    path: 'admin/users/:id/delete',
    loadChildren: () => import('./pages/admin/users/delete/delete.module')
      .then(m => m.DeletePageModule)
  },
  {
    path: 'admin/invoices',
    loadChildren: () => import('./pages/admin/invoices/invoices.module')
      .then(m => m.InvoicesPageModule)
  },
  {
    path: 'admin/invoices/create',
    loadChildren: () => import('./pages/admin/invoices/create/create.module')
        .then( m => m.CreatePageModule)
  },
  {
    path: 'admin/invoices/list',
    loadChildren: () => import('./pages/admin/invoices/list/list.module')
      .then(m => m.ListPageModule)
  },
  {
    path: 'admin/invoices/:id/view',
    loadChildren: () => import('./pages/admin/invoices/view/view.module')
      .then(m => m.ViewPageModule)
  },
  {
    path: 'admin/invoices/:id/edit',
    loadChildren: () => import('./pages/admin/invoices/edit/edit.module')
      .then(m => m.EditPageModule)
  },
  {
    path: 'admin/invoices/:id/delete',
    loadChildren: () => import('./pages/admin/invoices/delete/delete.module')
      .then(m => m.DeletePageModule)
  },
  {
    path: 'admin/bookings',
    loadChildren: () => import('./pages/admin/bookings/bookings.module')
      .then(m => m.BookingsPageModule)
  },
  {
    path: 'admin/bookings/list',
    loadChildren: () => import('./pages/admin/bookings/list/list.module')
      .then(m => m.ListPageModule)
  },
  {
    path: 'admin/bookings/calendar',
    loadChildren: () => import('./pages/admin/bookings/calendar/calendar.module')
        .then( m => m.CalendarPageModule)
  },
  {
    path: 'admin/bookings/create',
    loadChildren: () => import('./pages/admin/bookings/create/create.module')
      .then( m => m.CreatePageModule)
  },
  {
    path: 'admin/bookings/:id/view',
    loadChildren: () => import('./pages/admin/bookings/view/view.module')
      .then(m => m.ViewPageModule)
  },
  {
    path: 'admin/bookings/:id/edit',
    loadChildren: () => import('./pages/admin/bookings/edit/edit.module')
      .then(m => m.EditPageModule)
  },
  {
    path: 'admin/bookings/:id/delete',
    loadChildren: () => import('./pages/admin/bookings/delete/delete.module')
      .then(m => m.DeletePageModule)
  },
  {
    path: 'admin/repairs',
    loadChildren: () => import('./pages/admin/repairs/repairs.module')
      .then( m => m.RepairsPageModule)
  },
  {
    path: 'admin/repairs/list',
    loadChildren: () => import('./pages/admin/repairs/list/list.module')
      .then( m => m.ListPageModule)
  },
  {
    path: 'admin/repairs/create',
    loadChildren: () => import('./pages/admin/repairs/create/create.module')
      .then( m => m.CreatePageModule)
  },
  {
    path: 'admin/repairs/:id/view',
    loadChildren: () => import('./pages/admin/repairs/view/view.module')
      .then( m => m.ViewPageModule)
  },
  {
    path: 'admin/repairs/:id/edit',
    loadChildren: () => import('./pages/admin/repairs/edit/edit.module')
      .then( m => m.EditPageModule)
  },
  {
    path: 'admin/repairs/:id/delete',
    loadChildren: () => import('./pages/admin/repairs/delete/delete.module')
      .then( m => m.DeletePageModule)
  },
  {
    path: 'admin/devices',
    loadChildren: () => import('./pages/admin/devices/devices.module')
      .then( m => m.DevicesPageModule)
  },
  {
    path: 'admin/devices/create',
    loadChildren: () => import('./pages/admin/devices/create/create.module')
      .then( m => m.CreatePageModule)
  },
  {
    path: 'admin/devices/list',
    loadChildren: () => import('./pages/admin/devices/list/list.module')
      .then( m => m.ListPageModule)
  },
  {
    path: 'admin/devices/:id/view',
    loadChildren: () => import('./pages/admin/devices/view/view.module')
      .then( m => m.ViewPageModule)
  },
  {
    path: 'admin/devices/:id/edit',
    loadChildren: () => import('./pages/admin/devices/edit/edit.module')
      .then( m => m.EditPageModule)
  },
  {
    path: 'admin/devices/:id/delete',
    loadChildren: () => import('./pages/admin/devices/delete/delete.module')
      .then( m => m.DeletePageModule)
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
