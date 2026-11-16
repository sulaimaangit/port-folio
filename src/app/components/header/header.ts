import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { scrollToSection as scrollToPageSection } from '../../utils/scroll-to-section';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollToSection(id: string): void {
    scrollToPageSection(id);
  }
}
