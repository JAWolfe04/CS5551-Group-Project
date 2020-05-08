import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../Home/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'food',
        loadChildren: () => import('../Food/my-food/my-food.module').then(m => m.MyFoodPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../Home/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'add-food',
        loadChildren: () => import('../Food/add-food/add-food.module').then(m => m.AddFoodPageModule)
      },
      {
        path: 'info-food',
        loadChildren: () => import('../Food/info-food/info-food.module').then(m => m.InfoFoodPageModule)
      },
      {
        path: 'exercise',
        loadChildren: () => import('../Exercise/my-exercise/my-exercise.module').then( m => m.MyExercisePageModule)
      },
      {
        path: 'add-exercise',
        loadChildren: () => import('../Exercise/add-exercise/add-exercise.module').then( m => m.AddExercisePageModule)
      },
      {
        path: 'create-exercise',
        loadChildren: () => import('../Exercise/create-exercise/create-exercise.module').then( m => m.CreateExercisePageModule)
      },
      {
        path: 'image-upload',
        loadChildren: () => import('../Food/image-upload/image-upload.module').then( m => m.ImageUploadPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
