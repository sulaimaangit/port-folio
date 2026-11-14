import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class HeaderComponent {
  @Input() isDarkMode = false;
  @Output() themeToggle = new EventEmitter<void>();
}
