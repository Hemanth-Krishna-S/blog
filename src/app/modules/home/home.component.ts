import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiConstants } from 'src/app/core/constants/api.constants';
import { HomeService } from './home.service';
import { HomeContent } from './models/home-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{
    assetsPath: string = environment.assetsPath;
    homeContentApi: string = ApiConstants.FETCH_HOME_CONTENT_API;
    homeContent: HomeContent | undefined;
    homeProfilePic: string = "home_profile_2.png";

    constructor(private homeService: HomeService) {}

    ngOnInit(): void {
      this.homeService.getHomeContent(this.homeContentApi).subscribe({
        next: (v) => {
          if(v && v.success) {
            this.homeContent = v;
          }
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    }
}
