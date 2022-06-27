import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountApiService } from '../_services/account-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sub!:Subscription;

  constructor(private accountService:AccountApiService,private router:Router) { }

  ngOnInit(): void {
    this.sub=this.accountService.currentUser$.subscribe(res=>{
      if(!!res) this.router.navigateByUrl('/dashboard');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
