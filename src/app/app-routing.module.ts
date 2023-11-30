import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'skills',
        loadChildren: () => import('./modules/skills/skills.module').then(m => m.SkillsModule)
      },
      {
        path: 'experience',
        loadChildren: () => import('./modules/experience/experience.module').then(m => m.ExperienceModule)
      },
      {
        path: 'achievements',
        loadChildren: () => import('./modules/achievements/achievements.module').then(m => m.AchievementsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
