import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: { title: string; status?: string; description: string; tags: string[]; link: string }[] = [
    {
      title: 'NBFC Gold Loan Management',
      status: 'Currently Working On',
      description: 'Enterprise multi-branch application used across branches to manage the end-to-end gold loan application and lifecycle, built with Angular, scalable ASP.NET Core APIs, and MSSQL.',
      tags: ['Angular', 'ASP.NET Core', 'MSSQL', 'C#', 'SQL'],
      link: '#'
    },
    {
      title: 'Hotel Website',
      description: 'A responsive hotel booking website developed during internship using the MEAN stack.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and user management.',
      tags: ['Angular', 'Node.js', 'Stripe'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular.',
      tags: ['Angular', 'HTML', 'CSS'],
      link: '#'
    }
  ];

  filteredProjects: any[] = [];
  activeCategory = 'All';
  categories = ['All', 'Angular', 'ASP.NET Core', 'Node.js', 'MSSQL']; // extracted from tags for demo

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  trackByTitle(_: number, project: { title: string }) {
    return project.title;
  }

  filter(category: string) {
    this.activeCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.tags.some(tag => tag.includes(category))
      );
    }
  }
}
