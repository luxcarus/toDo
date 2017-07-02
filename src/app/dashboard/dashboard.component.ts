import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DashboardService} from './dashboard.service'

@Component({
  selector: 'app-root',
  templateUrl: './view.html',
  styleUrls: ['./style.css'],
  providers: [DashboardService]
})
export class DashboardComponent {

  constructor (private router:Router,private dashboardService:DashboardService) {}

  getList() {
    this.dashboardService.getList();
  }

}