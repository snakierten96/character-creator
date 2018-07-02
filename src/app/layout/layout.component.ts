import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { NavigationService } from '../services/navigation.service';
import { INavItem } from '../models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  title: String;
  scrolling = false;
  progressMode = 'determinate';
  navItems$: Observable<INavItem[]>;

  constructor(
    private titleService: Title,
    private navService: NavigationService) {
      this.title = titleService.getTitle();
    }

  ngOnInit() {
    this.navItems$ = this.navService.getNavigation();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    if (window.scrollY === 0) {
      this.scrolling = false;
    } else {
      this.scrolling = true;
    }
  }

}
