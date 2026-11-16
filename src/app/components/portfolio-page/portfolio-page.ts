import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutComponent } from '../about/about';
import { ContactComponent } from '../contact/contact';
import { HomeComponent } from '../home/home';
import { JourneyComponent } from '../journey/journey';
import { WorkComponent } from '../work/work';
import { scrollToSection } from '../../utils/scroll-to-section';

@Component({
  selector: 'app-portfolio-page',
  imports: [HomeComponent, AboutComponent, JourneyComponent, WorkComponent, ContactComponent],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css',
})
export class PortfolioPageComponent implements AfterViewInit {
  @ViewChildren('pageSection', { read: ElementRef })
  private pageSections!: QueryList<ElementRef<HTMLElement>>;

  constructor(private readonly route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    const sectionId = this.route.snapshot.data['scrollTo'];
    if (typeof sectionId !== 'string') {
      return;
    }

    const section = this.pageSections.find(({ nativeElement }) => nativeElement.id === sectionId);
    if (!section) {
      throw new Error(`Portfolio section "${sectionId}" does not exist.`);
    }

    scrollToSection(sectionId);
  }
}
