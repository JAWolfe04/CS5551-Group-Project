import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmGuard } from './guards/confirm.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./Authentication/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Authentication/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./Authentication/confirmation/confirmation.module').then(m => m.ConfirmationPageModule),
    canActivate: [ConfirmGuard]
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./Authentication/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
