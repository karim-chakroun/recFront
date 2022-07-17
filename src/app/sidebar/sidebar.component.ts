import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router) { }

  private dashboardUrls =[
    "/client-details",
    "/lgd",
    "/oil-forecast",
    "/portfolio-overview"
];

  isDashboard(){
    return this.dashboardUrls.indexOf(this.router.url)!==-1
  }

  ngOnInit(): void {
  }

}
