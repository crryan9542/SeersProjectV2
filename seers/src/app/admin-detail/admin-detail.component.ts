import { HttpBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prophecy } from '../prophecy';
import { ProphecyService } from '../prophecy.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  @Input() prophecy?: Prophecy;


  constructor(private route: ActivatedRoute, 
    private prophecyService: ProphecyService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getProphecy();
  }

  getProphecy(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.prophecyService.getProphecy(id).subscribe(prophecy => this.prophecy = prophecy);
  }

goBack(): void {
  this.location.back();
}
save(): void {
  if (this.prophecy) {
    this.prophecyService.updateProphecy(this.prophecy).subscribe(() => this.goBack());
  }

}

}
