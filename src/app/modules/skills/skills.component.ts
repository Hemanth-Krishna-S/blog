import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { ApiConstants } from 'src/app/core/constants/api.constants';
import { SkillsList } from './models/skills-list';
import { Skill } from './models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  skillsApi: string = ApiConstants.FETCH_SKILLS_API;
  frontendSkills: Skill[] | undefined;
  backendSkills: Skill[] | undefined;


  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills(this.skillsApi).subscribe({
      next: (v) => {
        if(v && v.success) {
          this.frontendSkills = v.frontendSkillsList;
          this.backendSkills = v.backendSkillsList;
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info("complete")
    })
  }
}
