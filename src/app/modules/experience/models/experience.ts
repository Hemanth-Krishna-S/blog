import { BaseResponseModel } from "src/app/core/models/base-response";
import { ExperienceDetails } from "./experience-details";

export interface Experience extends BaseResponseModel {
    experience: ExperienceDetails[];
}