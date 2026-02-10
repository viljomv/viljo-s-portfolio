import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = [
    {
      degree: 'BCA (Ongoing)',
      institution: 'Indira Gandhi National Open University (IGNOU)',
      year: '2023',
    },
    {
      degree: 'Diploma (Computer Engineering)',
      institution: 'Government Polytechnic College, Kunnamkulam',
      year: '2018',
    }
  ];
}
