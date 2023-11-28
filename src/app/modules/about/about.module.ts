import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutService } from './about.service';
import { InterestsComponent } from './modules/interests/interests.component';
import { PersonalDetailsComponent } from './modules/personal-details/personal-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent,
    InterestsComponent,
    PersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  providers: [AboutService]
})
export class AboutModule { }
