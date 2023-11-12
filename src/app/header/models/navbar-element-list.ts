import { BaseResponseModel } from "src/app/core/models/base-response";
import { NavbarElement } from "./navbar-element";

export interface NavbarElementList extends BaseResponseModel{
    elementsList: NavbarElement[];
}