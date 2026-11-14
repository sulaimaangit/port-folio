import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { WorkComponent } from './components/work/work';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { JourneyComponent } from './components/journey/journey';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'work', component: WorkComponent, title: 'Work' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'connect', component: ContactComponent, title: 'Connect' },
  { path: 'contact', redirectTo: 'connect' },
  { path: 'journey', component: JourneyComponent, title: 'Journey' },
  { path: 'experience', redirectTo: 'journey' },
  { path: '**', redirectTo: '' },
];
