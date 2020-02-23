import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/summary',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'food',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../food/food.module').then(m => m.FoodPageModule)
          }
        ]
      },
      {
        path: 'summary',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../summary/summary.module').then(m => m.SummaryPageModule)
          }
        ]
      },
      {
        path: 'exercise',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../exercise/exercise.module').then(m => m.ExercisePageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
