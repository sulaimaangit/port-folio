import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { WorkComponent } from './components/work/work';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Muhammad Sulaimaan — Portfolio' },
  { path: 'work', component: WorkComponent, title: 'Work — Muhammad Sulaimaan' },
  { path: 'about', component: AboutComponent, title: 'About — Muhammad Sulaimaan' },
  { path: 'contact', component: ContactComponent, title: 'Contact — Muhammad Sulaimaan' },
  { path: '**', redirectTo: '' },
];
