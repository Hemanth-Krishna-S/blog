import { BaseResponseModel } from "src/app/core/models/base-response";
import { Achievement } from "./achievement";

export interface AchievementsList extends BaseResponseModel{
    achievements: Achievement[];
}