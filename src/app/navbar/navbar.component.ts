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
    var quotes=[
      'Your limitation is only your imagination',
      ' Sometimes later becomes never. Do it now.',
      'The way to get started is to quit talking and begin doing.',
      'If you want a thing well done, DO IT YOURSELF.',
      'If you don\'t start TODAY, then what makes you think you\'ll start TOMORROW',
    ]
    var randomnumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('displayquote').innerHTML = quotes[randomnumber];
  }
  change(){
    var quotes=[
      'Your limitation—is only your imagination',
      ' Sometimes later becomes never. Do it now.',
      'If you don\'t start TODAY, then what makes you think you\'ll start TOMORROW',
      'If you want a thing well done, DO IT YOURSELF.',
      'The way to get started is to quit talking and begin doing.'
    ]
    var randomnumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('displayquote').innerHTML = quotes[randomnumber];
  }

}
