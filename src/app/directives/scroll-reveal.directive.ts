import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() delay = '0s';
  @Input() threshold = 0.1;

  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.opacity = '0';
    this.el.nativeElement.style.transform = 'translateY(30px)';
    this.el.nativeElement.style.transition = `opacity 0.8s ease-out ${this.delay}, transform 0.8s ease-out ${this.delay}`;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.style.opacity = '1';
          this.el.nativeElement.style.transform = 'translateY(0)';
          if (this.observer) this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: this.threshold
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
