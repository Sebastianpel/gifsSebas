import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideMenuOptions} from '../../components/side-menu/side-menu-options/side-menu-options';
import {SideMenuHeader} from '../../components/side-menu/side-menu-header/side-menu-header';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterOutlet,
    SideMenuOptions,
    SideMenuHeader
  ],
  templateUrl: './dashboard-page.html',
  styles: ``
})
export default class DashboardPage {

}
