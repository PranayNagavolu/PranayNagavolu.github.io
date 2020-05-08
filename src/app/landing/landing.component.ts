import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  scroll(element){   
    const ele = document.getElementById(element);   
    window.scrollTo(ele.offsetLeft,ele.offsetTop);
  }

}
