import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Fashion Website',
      description: 'A responsive and modern e-commerce platform built with Angular and Node.js.',
      image: 'https://www.sliderrevolution.com/wp-content/uploads/2023/06/fashion-website-templates.jpg',
      demoLink: 'https://giorgadze897.github.io/fashion-shop/',
      codeLink: 'https://github.com/Giorgadze897/AngularPortfolio'
    },
    {
      title: 'Watch Website',
      description: 'My personal portfolio showcasing skills, projects, and contact form.',
      image: 'https://themewagon.com/wp-content/uploads/2021/05/Watch.png',
      demoLink: 'https://giorgadze897.github.io/watch-shop/',
      codeLink: 'https://github.com/Giorgadze897/watch-shop'
    },
    {
      title: 'Blog Platform',
      description: 'A blog site with markdown support, user auth, and CRUD operations.',
      image: 'https://www.templateshub.net/uploads/1552050005%20open-list-thumb-min.png',
      demoLink: 'https://your-blog.com',
      codeLink: 'https://github.com/your-repo/blog'
    },
  ];
}
