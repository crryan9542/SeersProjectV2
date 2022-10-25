import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Prophecy } from '../prophecy';
import { ProphecyService } from '../prophecy.service';
@Component({
  selector: 'app-prophecies',
  templateUrl: './prophecies.component.html',
  styleUrls: ['./prophecies.component.css']
})
export class PropheciesComponent implements OnInit {
prophecies: Prophecy[] = [];

selectedProphecy?: Prophecy;

  constructor(private prophecyService: ProphecyService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProphecies();
  }

  getProphecies(): void {
    this.prophecyService.getProphecies().subscribe(prophecies => this.prophecies = prophecies);
  }

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.prophecyService.addProphecy({ name } as Prophecy).subscribe(prophecy => {
    this.prophecies.push(prophecy);
  });
}

delete(prophecy: Prophecy): void {
  this.prophecies = this.prophecies.filter(h => h !== prophecy);
  this.prophecyService.deleteProphecy(prophecy.id).subscribe();
}

}
