import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public pageContent: any = {
    title: 'About Me',
    description: 'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.',
    subTitle: "Get to know me!",
    contactLink: '#scrollspyHeading4',
    content: [
      "I'm a passionate and dedicated Full-Stack Web Developer with a proven track record of creating robust and scalable web applications. My expertise spans both front-end and back-end technologies, including Java, Spring Boot, and Angular. With a keen eye for design and a commitment to clean, efficient code, I strive to deliver exceptional user experiences.",
      "I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people in the Dev Community. Feel free to connect or follow me on my LinkedIn where I post useful content related to Web Development and Programming.",
      "I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to contact me."
    ]
  }

}
