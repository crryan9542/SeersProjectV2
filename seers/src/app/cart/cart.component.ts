import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';  
import { Prophecy } from '../prophecy';
import { ProphecyService } from '../prophecy.service';
import { UserService } from '../user.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


removeFromCart(_t4: Prophecy) {
  this.cartService.removeFromCart(_t4);
}

ngOnInit(): void {
}


  items = this.cartService.getItems()

  
  constructor(private cartService: CartService) { }

 

}
