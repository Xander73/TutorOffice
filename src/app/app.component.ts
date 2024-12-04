import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar'
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';


const menu = [
  { name: 'Home', id: 'home-main-menu', link: 'home' },
  { name: 'Products', id: 'products-main-menu', link: 'products' },
  { name: 'About me', id: 'about-me-main-menu', link: 'about-me' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'TutorOffice';

  ngOnInit(): void {

  }

  get getMenu() {
    return menu;
  }
}
