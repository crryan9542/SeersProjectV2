import { Component, Input, OnInit } from '@angular/core';
import { Prophecy } from '../prophecy';
import { ProphecyService } from '../prophecy.service';
import { Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminprophecies',
  templateUrl: './adminprophecies.component.html',
  styleUrls: ['./adminprophecies.component.css']
})
export class AdminpropheciesComponent implements OnInit {



prophecy?: Prophecy;


prophecies: Prophecy[] = [];


constructor(private prophecyService: ProphecyService,
  private route: ActivatedRoute, private location: Location) { }
  
toString(_t65: HTMLInputElement): string {
  return _t65.value;
}

parseInt(_t65: HTMLInputElement): number {
return parseInt(_t65.value);
}


save(): void {
    if (this.prophecy) {
      this.prophecyService.updateProphecy(this.prophecy).subscribe(() => this.goBack());
  }  
  }



goBack(): void{
  this.location.back();
}
  

  ngOnInit(): void {
    this.getProphecies();
  }
  
  getProphecy() :void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.prophecyService.getProphecy(id).subscribe(prophecy => this.prophecy = prophecy);
  }


getProphecies(): void {
  this.prophecyService.getProphecies().subscribe(prophecies => this.prophecies = prophecies);
}

delete(prophecy: Prophecy): void {
  this.prophecies = this.prophecies.filter(h => h !== prophecy);
  this.prophecyService.deleteProphecy(prophecy.id).subscribe();
}

add(id: number, name: string, description: string, price: number, quantity: number){
  name = name.trim();
  description = description.trim();
  this.prophecyService.addProphecy({id, name, description, price, quantity} as Prophecy).subscribe(prophecy => {
    this.prophecies.push(prophecy);
  });
}

removeProduct(id: number){
  this.prophecies = this.prophecies.filter(h => h.id !== id);
  this.prophecyService.deleteProphecy(id).subscribe();
}





}

