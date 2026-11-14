import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeVisualComponent } from '../home-visual/home-visual';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HomeVisualComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
