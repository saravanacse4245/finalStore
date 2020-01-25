import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuClik() {
    if (document.getElementsByClassName('navbar-toggler toggled').length) { 
      document.getElementById('navbar-toggler-id').click();
    }
  }
}
