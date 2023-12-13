import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiConstants } from 'src/app/core/constants/api.constants';
import { Achievement } from './model/achievement';
import { AchievementsService } from './achievements.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.less']
})
export class AchievementsComponent {

  achievementsApi: string = ApiConstants.FETCH_ACHIVEMENTS_API;
  achievements: Achievement[] | undefined;
  openImgPopUp:boolean = false;
  // displayStyle:string = 'none';
  // popUpImgUrl:string = '';

  constructor(private achievementsService: AchievementsService) {}

  ngOnInit(): void {
    this.achievementsService.getAchievements(this.achievementsApi).subscribe({
      next: (v) => {
        if(v && v.success) {
          this.achievements = v.achievements;
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info("complete")
    })
  }
  
  // openImgPopup(imgUrl:string) { 
  //   this.popUpImgUrl = imgUrl;
  //   this.displayStyle = "block"; 
  // } 
  // closeImgPopup() { 
  //   this.displayStyle = "none"; 
  // } 

}
