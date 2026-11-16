import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { scrollToSection as scrollToPageSection } from '../../utils/scroll-to-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  scrollToSection(id: string): void {
    scrollToPageSection(id);
  }
}
