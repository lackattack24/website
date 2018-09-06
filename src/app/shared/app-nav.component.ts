import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  public nav = [
    {
      titleKey: 'app_nav_home',
      path: '/'
    },
    {
      titleKey: 'app_nav_speedruns',
      path: '/speedruns'
    },
    {
      titleKey: 'app_nav_goals',
      path: '/goals'
    },
    {
      titleKey: 'app_nav_marathons',
      path: '/marathons'
    },
    {
      titleKey: 'app_nav_about',
      path: '/about'
    }
  ];
}
