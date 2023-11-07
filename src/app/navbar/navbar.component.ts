import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  scroll(element){   
    const ele = document.getElementById(element);   
    window.scrollTo(ele.offsetLeft,ele.offsetTop);
  }


  ngOnInit(): void {
  }

}
