import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AchievementsRoutingModule } from './achievements-routing.module';
import { AchievementsComponent } from './achievements.component';



@NgModule({
  declarations: [AchievementsComponent],
  imports: [
    SharedModule,
    AchievementsRoutingModule
  ]
})
export class AchievementsModule { }
