import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  links = [
    { path: '/', title: 'Home' },
    { path: '/about-us', title: 'About Us' },
    { path: '/contact', title: 'Contact' }
  ];
}
