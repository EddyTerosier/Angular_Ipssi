import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {
  links = [
    { path: '/dashboard', title: 'Dashboard' },
    { path: '/profile', title: 'Profile' },
    { path: '/projects', title: 'Projects' },
    { path: '/settings', title: 'Settings' },
  ];
}
