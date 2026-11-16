import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page';

export const routes: Routes = [
  { path: '', component: PortfolioPageComponent, data: { scrollTo: 'home' }, title: 'Home' },
  { path: 'work', component: PortfolioPageComponent, data: { scrollTo: 'work' }, title: 'Work' },
  { path: 'about', component: PortfolioPageComponent, data: { scrollTo: 'about' }, title: 'About' },
  { path: 'connect', component: PortfolioPageComponent, data: { scrollTo: 'connect' }, title: 'Connect' },
  { path: 'contact', redirectTo: 'connect' },
  { path: 'journey', component: PortfolioPageComponent, data: { scrollTo: 'journey' }, title: 'Journey' },
  { path: 'experience', redirectTo: 'journey' },
  { path: '**', redirectTo: '' },
];
