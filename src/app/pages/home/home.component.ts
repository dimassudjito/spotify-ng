import { Component, OnInit } from '@angular/core';

import { HOME_SUBPAGE } from 'src/app/constants/home-subpage.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subpages: { name: HOME_SUBPAGE, selected: boolean }[] = [];
  selectedSubpage = HOME_SUBPAGE.ALL;

  constructor() { 
  }

  ngOnInit(): void {
    this.initSubpages();
  }

  initSubpages() {
    this.subpages = [
      { name: HOME_SUBPAGE.ALL, selected: true },
      { name: HOME_SUBPAGE.MUSIC, selected: false },
      { name: HOME_SUBPAGE.PODCASTS, selected: false },
      { name: HOME_SUBPAGE.AUDIOBOOKS, selected: false }
    ];
  }

  selectSubpage(subpage: HOME_SUBPAGE) {
    this.selectedSubpage = subpage;
    this.subpages.forEach(sub => {
      sub.selected = sub.name === this.selectedSubpage;
    });
  }

  getHomeSubpage() {
    return HOME_SUBPAGE;
  }

}
