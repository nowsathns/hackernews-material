import { Component } from '@angular/core';

@Component({
  selector: 'hn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeLinkIndex = 0;
  tabLinks = [
    { name : 'new', link : 'newest/1' },
    { name : 'show', link : 'show/1' },
    { name : 'ask', link : 'ask/1' },
    { name : 'jobs', link : 'jobs/1' }
  ];
}
