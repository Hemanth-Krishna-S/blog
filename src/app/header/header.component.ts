import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HeaderService } from './header.service';
import { NavbarElement } from './models/navbar-element';
import { ApiConstants } from '../core/constants/api.constants';
import { Constants } from '../core/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit{
  menuActive:string = '';
  navbarElements:NavbarElement[] | undefined;
  assetsPath: string = environment.assetsPath;
  navbarApi: string = ApiConstants.FETCH_NAVBAR_ELEMENTS_API;
  defaultNavbarActiveElement: string = Constants.DEFAULT_NAVBAR_ACTIVE_ELEMENT;


  constructor(private router: Router,
    private headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerService.getNavbarElements(this.navbarApi).subscribe({
      next: (v) => {
        if (v && v.success) {
          this.navbarElements = v.elementsList;
          const routerUrl = this.router.url === '/' ? this.defaultNavbarActiveElement: this.router.url;
          const activeElement = this.navbarElements.filter(x => x.navigationUrl === routerUrl);
          this.menuActive = activeElement && activeElement.length > 0 ? 
                            this.navbarElements.filter(x => x.navigationUrl === routerUrl)[0].id : '';
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

  navigate(id: string) {
    this.router.navigateByUrl(id);
    this.menuActive = id;
  }
}
