import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menu: any = [
    {
      name: 'Home',
      link: '#scrollspyHeading1'
    },
    {
      name: 'About',
      link: '#scrollspyHeading2'
    },
    {
      name: 'Projects',
      link: '#scrollspyHeading3'
    },
    {
      name: 'Contact',
      link: '#scrollspyHeading4'
    }
  ]

}
