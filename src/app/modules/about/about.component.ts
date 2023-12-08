import { Component } from '@angular/core';
import { ApiConstants } from 'src/app/core/constants/api.constants';
import { environment } from 'src/environments/environment';
import { HomeService } from '../home/home.service';
import { HomeContent } from '../home/models/home-content';
import { AboutService } from './about.service';
import { ProfileContent } from './models/profile-content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  assetsPath: string = environment.assetsPath;
    profileContentApi: string = ApiConstants.FETCH_HOME_CONTENT_API;
    profileContent: ProfileContent | undefined;
    profilePic: string = "home_profile_2.png";

    constructor(private aboutService: AboutService) {}

    ngOnInit(): void {
      this.aboutService.getProfileContent(this.profileContentApi).subscribe({
        next: (v) => {
          if(v && v.success) {
            this.profileContent = v;
            this.profileContent.socialLinks[4].url= this.assetsPath+'/resume.pdf';
          }
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    }
}
