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
        loadChildren: () => import('../food/food.module').then(m => m.FoodPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'add-food',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../add-food/add-food.module').then(m => m.AddFoodPageModule)
          }
        ]
      },
      {
        path: 'routine',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../routine/routine.module').then(m => m.RoutinePageModule)
          }
        ]
      },
      {
        path: 'exercise',
        loadChildren: () => import('../exercise/exercise.module').then(m => m.ExercisePageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then(m => m.UserPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
