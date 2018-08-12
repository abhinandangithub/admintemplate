import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }
  showSideBar = true;

  ngOnInit() {
  }

  showHideSideBar() {
    if (this.showSideBar) {
      document.getElementById('left-sidebar').style.display = 'none';
      document.getElementById('content-wrapper').style.marginLeft = '0px';
    } else {
      document.getElementById('left-sidebar').style.display = 'block';
      document.getElementById('content-wrapper').style.marginLeft = '230px';
    }
    this.showSideBar = !this.showSideBar;
  }
}
