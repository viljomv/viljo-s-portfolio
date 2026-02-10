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
      duration: '05/2022 – Present',
      location: 'Ernakulam, India',
      description: 'Full Stack Development of scalable web applications.',
      responsibilities: [
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
      duration: '10/2021 – 04/2022',
      location: 'Ernakulam, India',
      description: 'Trained in MEAN stack and developed projects.',
      responsibilities: [
        'Completed training in the MEAN (MongoDB, Express.js, Angular, Node.js) stack, gaining hands-on experience in full-stack development.',
        'Developed and deployed a simple hotel website project using Angular.',
        'Acquired foundational knowledge in building efficient and responsive user interfaces.',
        'Gained experience in designing and implementing simple workflows and layouts for web applications.'
      ]
    }
  ];
}
