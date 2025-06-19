import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
services = [
  {
    icon: 'https://static.thenounproject.com/png/219095-200.png',
    title: 'Web Development',
    description: `I design and build modern, mobile-responsive websites with clean code, fast performance, and a strong focus on user experience and SEO optimization.`,
    more: `I specialize in Angular, React, and performance-optimized frontends integrated with RESTful APIs. My websites are accessible, SEO-friendly, and scalable.`,
    expanded: false
  },
  {
    icon: 'https://static.thenounproject.com/png/2560030-200.png',
    title: 'Game Development',
    description: `I develop immersive 2D and 3D games using Unity and other tools, blending engaging gameplay mechanics with optimized performance and eye-catching visuals.`,
    more: `From prototyping to publishing, I manage the full game development cycle with C#, Unity, animations, UI/UX, and asset integration.`,
    expanded: false
  },
  {
    icon: 'https://miro.medium.com/v2/resize:fit:512/1*ofWDRDb2--pYN6frN0GqXA.png',
    title: 'C# API Website',
    description: `I create secure, scalable RESTful APIs using C# and .NET technologies, providing reliable backend functionality for modern web and mobile applications.`,
    more: `I build robust backend systems using Entity Framework, JWT authentication, and API documentation with Swagger to ensure maintainability and security.`,
    expanded: false
  }
];

toggleExpand(service: any) {
  service.expanded = !service.expanded;
}


}
