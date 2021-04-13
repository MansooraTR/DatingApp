import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode = false;
users:any;
 
  constructor(private hhtp:HttpClient) { }

  ngOnInit(): void {
   //demo this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  // getUsers(){
  //   this.hhtp.get("https://localhost:5001/api/users").subscribe(users => this.users=users)
  // }demo for getting users

  cancelRegisterMode(event:boolean){
    this.registerMode = event;

  }
  

}
