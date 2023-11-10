import { Component, OnInit } from '@angular/core';
import { HeaderConstants } from '../core/constants/header.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit{
  menuActive:string = HeaderConstants.NAVBAR_ELEMENTS[0];
  navbarElements:string[] = HeaderConstants.NAVBAR_ELEMENTS;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.menuActive = this.router.url;
  }

  navigate(url: string) {
    this.menuActive = url;
  }
}
