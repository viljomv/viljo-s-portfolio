import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  menu: any = [
    {
      name: 'Home',
      link: '#scrollspyHeading1'
    },
    // {
    //   name: 'About',
    //   link: '#scrollspyHeading2'
    // },
    // {
    //   name: 'Projects',
    //   link: '#scrollspyHeading3'
    // },
    // {
    //   name: 'Contact',
    //   link: '#scrollspyHeading4'
    // }
  ]
  
}
