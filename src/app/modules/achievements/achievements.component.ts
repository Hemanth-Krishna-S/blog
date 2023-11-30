import { Component } from '@angular/core';
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

}
