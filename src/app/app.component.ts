import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
  constructor() {
    
  }
  ngOnInit(): void {
    console.log(1+2)  
  }
}
