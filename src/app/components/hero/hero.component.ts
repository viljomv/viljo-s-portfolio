import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  typedText = '';
  private fullText = 'FULL STACK DEVELOPER';
  private typingSpeed = 100;
  private currentLength = 0;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.currentLength < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.currentLength);
      this.currentLength++;
      setTimeout(() => this.typeWriter(), this.typingSpeed);
    }
  }
}
