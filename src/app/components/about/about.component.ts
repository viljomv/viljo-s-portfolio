import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  highlights = [
    { icon: 'code', title: 'Clean Architecture', text: 'Scalable, reusable front-end and API design.' },
    { icon: 'shield', title: 'Secure & Performant', text: 'Enterprise-grade systems built for reliability.' },
    { icon: 'team', title: 'Team Leadership', text: 'Mentoring developers and driving delivery.' }
  ];

  skillGroups = [
    { label: 'Frontend', items: ['Angular', 'TypeScript', 'HTML5 & CSS3', 'SCSS', 'Bootstrap', 'Material UI'] },
    { label: 'Backend & Data', items: ['ASP.NET Core', 'C#', 'REST APIs', 'MSSQL'] },
    { label: 'Tools', items: ['GitLab', 'Postman'] },
    { label: 'Soft Skills', items: ['Project Management', 'Leadership', 'Problem Solving'] }
  ];
}
