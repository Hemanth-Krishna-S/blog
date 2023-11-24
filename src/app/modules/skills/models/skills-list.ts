import { BaseResponseModel } from "src/app/core/models/base-response";
import { Skill } from "./skill";

export interface SkillsList extends BaseResponseModel{
    frontendSkillsList: Skill[];
    backendSkillsList: Skill[];
}