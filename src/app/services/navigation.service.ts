import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { INavItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  getNavigation(): Observable<INavItem[]> {
    const navItems: INavItem[] = [];
    return of(navItems);
  }
}
