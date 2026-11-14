import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isDarkMode = localStorage.getItem('portfolio-theme') === 'dark';

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('portfolio-theme', this.isDarkMode ? 'dark' : 'light');
  }
}
