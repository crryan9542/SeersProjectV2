import { Component, OnInit, Input } from '@angular/core';
import { Prophecy } from '../prophecy';
import {ActivatedRoute} from '@angular/router';
import { ProphecyService } from '../prophecy.service';
import { Location } from '@angular/common';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-prophecy-detail',
  templateUrl: './prophecy-detail.component.html',
  styleUrls: ['./prophecy-detail.component.css']
})
export class ProphecyDetailComponent implements OnInit {

  @Input() prophecy?: Prophecy;


  constructor(private route: ActivatedRoute, 
    private prophecyService: ProphecyService,
    private location: Location,
    private cartService: CartService)
     { }

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
addToCart(prophecy: Prophecy): void {
  this.cartService.addtoCart(prophecy);
  window.alert('Your prophecy has been added to the cart!');

}
}
