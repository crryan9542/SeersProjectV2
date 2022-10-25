import { Component, OnInit } from '@angular/core';
import { Prophecy } from '../prophecy';
import { ProphecyService } from '../prophecy.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
prophecies: Prophecy[] = [];
  constructor(private prophecyService: ProphecyService) { }

  ngOnInit(): void {
    this.getProphecies();
  }


getProphecies(): void {
  this.prophecyService.getProphecies().subscribe(prophecies => this.prophecies = prophecies.slice(1, 5));
}




}
