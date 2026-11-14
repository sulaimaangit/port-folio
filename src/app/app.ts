import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly currentYear = new Date().getFullYear();
  isDarkMode = localStorage.getItem('portfolio-theme') === 'dark';

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('portfolio-theme', this.isDarkMode ? 'dark' : 'light');
  }
}
