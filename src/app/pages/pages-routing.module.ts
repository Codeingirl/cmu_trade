import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../modules/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
      {
        path: 'oss',
        loadChildren: () =>
          import('../modules/oss/oss.module').then(
            (m) => m.OssModule
          ),
      },
      {
        path: 'e-office',
        loadChildren: () =>
          import('../modules/e-office/e-office.module').then(
            (m) => m.EOfficeModule
          ),
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('../modules/wallet/wallet.module').then(
            (m) => m.WalletModule
          ),
      },
      {
        path: 'topup',
        loadChildren: () =>
          import('../modules/topup/topup.module').then(
            (m) => m.TopupModule
          ),
      },
      {
        path: 'fundtranfer',
        loadChildren: () =>
          import('../modules/fundtranfer/fundtranfer.module').then(
            (m) => m.FundtranferModule
          ),
      },
      {
        path: 'chats',
        loadChildren: () =>
          import('../modules/chats/chats.module').then(
            (m) => m.ChatsModule
          ),
      },
      {
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: 'ecommerce',
        loadChildren: () =>
          import('../modules/e-commerce/e-commerce.module').then(
            (m) => m.ECommerceModule
          ),
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import('../modules/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
       {
        path: 'members',
        loadChildren: () =>
          import('../modules/members/members.module').then(
            (m) => m.MembersModule
          ),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('../modules/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: 'ngbootstrap',
        loadChildren: () =>
          import('../modules/ngbootstrap/ngbootstrap.module').then(
            (m) => m.NgbootstrapModule
          ),
      },
      {
        path: 'wizards',
        loadChildren: () =>
          import('../modules/wizards/wizards.module').then(
            (m) => m.WizardsModule
          ),
      },
      {
        path: 'material',
        loadChildren: () =>
          import('../modules/material/material.module').then(
            (m) => m.MaterialModule
          ),
      },
      {
        path: '',
        redirectTo: '/account/account-info',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
