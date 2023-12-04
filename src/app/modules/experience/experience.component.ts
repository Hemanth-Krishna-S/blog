import { Component,OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { ApiConstants } from 'src/app/core/constants/api.constants';
import { ExperienceDetails } from './models/experience-details';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {

  fetchExperienceDetailsApi: string = ApiConstants.FETCH_EXPERIENCE_DETAILS_API;
  experience: ExperienceDetails[] | undefined;

  constructor(private experienceService: ExperienceService,public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.experienceService.getExperienceDetails(this.fetchExperienceDetailsApi).subscribe ({
      next: (v) => {
        if (v && v.success) {
          this.experience = v.experience;
        }
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }
}
