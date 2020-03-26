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
        path: 'food',
        loadChildren: () => import('../Food/my-food/my-food.module').then(m => m.MyFoodPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'exercise',
        loadChildren: () => import('../exercise/exercise.module').then(m => m.ExercisePageModule)
      },
      {
        path: 'add-food',
        loadChildren: () => import('../Food/add-food/add-food.module').then(m => m.AddFoodPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
