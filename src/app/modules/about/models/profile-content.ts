import { BaseResponseModel } from "src/app/core/models/base-response";
import { SocialLinks } from "./social-links";

export interface ProfileContent extends BaseResponseModel{
    salutation: string;
    name: string;
    designation: string;
    socialLinks: SocialLinks[]
}