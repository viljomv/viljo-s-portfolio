import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';

  private roles = ['Full Stack Developer', 'Angular Specialist', 'ASP.NET Core Engineer', 'Problem Solver'];
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | undefined;

  socialLinks = [
    { icon: 'github', url: 'https://github.com/viljomv', label: 'GitHub' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/viljo-mv-93b27a225/', label: 'LinkedIn' },
    { icon: 'whatsapp', url: 'https://wa.me/919961443325', label: 'WhatsApp' },
    { icon: 'instagram', url: 'https://instagram.com/viljo_m_v', label: 'Instagram' }
  ];

  stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '4+', label: 'Featured Projects' },
    { value: 'NBFC', label: 'Domain Expertise' }
  ];

  featureCards = [
    { title: 'Frontend', icon: 'frontend', text: 'Modern & Responsive UI' },
    { title: 'Backend', icon: 'backend', text: 'Scalable & Secure APIs' },
    { title: 'Design', icon: 'design', text: 'User-Centric Solutions' }
  ];

  ngOnInit() {
    this.tick();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  private tick() {
    const word = this.roles[this.roleIndex];
    let delay = this.deleting ? 45 : 90;

    if (!this.deleting) {
      this.charIndex++;
      if (this.charIndex === word.length) {
        this.deleting = true;
        delay = 1800;
      }
    } else {
      this.charIndex--;
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        delay = 400;
      }
    }

    this.typedText = word.substring(0, this.charIndex);
    this.timer = setTimeout(() => this.tick(), delay);
  }
}
