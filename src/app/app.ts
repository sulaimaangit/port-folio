import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
