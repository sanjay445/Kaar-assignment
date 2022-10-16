import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  activeLink = "university";
  navMenu = [
    {
      lable: "University",
      link: "university"
    },
    {
      lable: "Food",
      link: "food"
    },
    {
      lable: "InfiniteScroll",
      link: "InfiniteScroll/scrollpage"
    }
    
  ]
  ngOnInit(): void {
  }

}
