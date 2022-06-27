import { Component, OnInit } from '@angular/core';
import { AccountApiService } from './_services/account-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyMusicApp-Angular';

  constructor(private accountService:AccountApiService) {}

  ngOnInit(): void {
    //podesiti odmah user-a iz local storage
    this.setCurrentUser();
  } 

  setCurrentUser(){
    this.accountService.setCurrentUser(JSON.parse(String(localStorage.getItem('user'))));
  }
  
}
