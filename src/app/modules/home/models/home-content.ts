import { BaseResponseModel } from "src/app/core/models/base-response";
import { SocialLinks } from "./social-links";

export interface HomeContent extends BaseResponseModel{
    salutation: string;
    name: string;
    designation: string;
    socialLinks: SocialLinks[]
}