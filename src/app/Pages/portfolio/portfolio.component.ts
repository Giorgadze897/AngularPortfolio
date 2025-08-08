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
      description: 'A stylish and fully responsive fashion website built with Angular, offering a smooth, dynamic, and elegant shopping experience. Designed for modern trends, the platform showcases the latest fashion collections with fast performance, intuitive navigation, and a sleek user interface.',
      image: 'https://graphicsfamily.com/wp-content/uploads/edd/2023/12/Fashion-Web-Banner-Design-scaled.jpg',
      demoLink: 'https://giorgadze897.github.io/fashion-shop/',
      codeLink: 'https://github.com/Giorgadze897/AngularPortfolio'
    },
    {
      title: 'Watch Website',
      description: 'Experience a sleek and fully responsive watch e-commerce platform built with Angular and Node.js — combining elegant design, seamless performance, and real-time features to deliver a modern shopping experience across all devices.',
      image: 'https://themewagon.com/wp-content/uploads/2021/05/Watch.png',
      demoLink: 'https://giorgadze897.github.io/watch-shop/',
      codeLink: 'https://github.com/Giorgadze897/watch-shop'
    },
    // {
    //   title: 'Event Ticket Booking System',
    //   description: 'A blog site with markdown support, user auth, and CRUD operations.',
    //   image: 'https://www.templateshub.net/uploads/1552050005%20open-list-thumb-min.png',
    //   demoLink: 'https://your-blog.com',
    //   codeLink: 'https://github.com/your-repo/blog'
    // },
  ];
}
