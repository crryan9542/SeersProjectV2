import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { MessageService } from '../message.service';
import { ProphecyService } from '../prophecy.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private messageService: MessageService, private router: Router) { }

currentUsername: String = "";
users: User[] = [];

  ngOnInit(): void {
  
  }
  toString(_t65: HTMLInputElement): string {
    return _t65.value;
  }

  
  login(username: string, password: string): void{
    if(username == "admin" && password == "admin"){
      this.messageService.add("Successfully logged in as admin");
      this.router.navigate(['/adminprophecies']);
      // window.location.href = 'http://localhost:4200/adminprophecies';
    }
    else{
      this.router.navigate(['/prophecies/']);
      this.messageService.add("Successfully logged in as user: " + username);
      this.currentUsername = username;
    }
  }



  register(username: string, password: string): void {
    username = username.trim();
    password = password.trim();
    if (!username || !password) { return; }
    this.userService.addUser({ username, password } as User).subscribe(user => {
      this.users.push(user);
    } );
this.messageService.add("Successfully registered as user" + username);
}


showCart(username: String): void {
if(username == "admin"){
  this.messageService.add("Admin cannot view cart");
} else {
  this.messageService.add("Showing cart for user: " + username);
  this.router.navigate(['/cart/' + username]);
  this.currentUsername = username;
}

}



}
