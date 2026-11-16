import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'MMSOFTTECH',
      position: 'Developer (FullStack)',
      duration: '05/2022 \u2013 Present',
      location: 'Ernakulam, India',
      current: true,
      description: 'Currently working on an enterprise NBFC Gold Loan Management application used across branches for end-to-end gold loan operations.',
      stack: ['Angular', 'ASP.NET Core', 'MSSQL', 'C#'],
      responsibilities: [
        'Currently developing and maintaining an NBFC Gold Loan Management system used across branches to manage the end-to-end gold loan application and lifecycle.',
        'Designed and implemented scalable, high-performance front-end architectures.',
        'Designed, developed, and maintained scalable, reusable, and secure backend APIs and stored procedures using ASP.NET Core and MSSQL.',
        'Conducted requirement gathering discussions and updates to ensure project alignment.',
        'Mentored and managed team members to enhance skills and productivity.',
        'Coordinated usability testing, bug tracking, and resolution to ensure seamless user experiences.',
        'Led team efforts to achieve project targets and deadlines.'
      ]
    },
    {
      company: 'Luminar Technolab',
      position: 'Intern',
      duration: '10/2021 \u2013 04/2022',
      location: 'Ernakulam, India',
      current: false,
      description: 'Trained in MEAN stack and developed projects.',
      stack: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
      responsibilities: [
        'Completed training in the MEAN (MongoDB, Express.js, Angular, Node.js) stack, gaining hands-on experience in full-stack development.',
        'Developed and deployed a simple hotel website project using Angular.',
        'Acquired foundational knowledge in building efficient and responsive user interfaces.',
        'Gained experience in designing and implementing simple workflows and layouts for web applications.'
      ]
    }
  ];
}
