import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {
  //u produkciji ova Angular app je served iz .NET app kao skup staticnih fileova pa je url samo '/api'
  //dok je u development 'https://localhost:7133/api'
  readonly appAPIUrl = environment.appAPIUrl;
  //ReplaySubject(1) je spec. tip Observable koji replay zadnju staru vrijednost novim subscriberima
  //User-a spasavamo tu 
  private currentUserSource=new ReplaySubject<User|null>(1);
  currentUser$=this.currentUserSource.asObservable();

  constructor(private http:HttpClient) { }
  
  Login(data:any){
    return this.http.post<any>(this.appAPIUrl+'/account/login',data).pipe(
      map((x:User)=>{
        if(x){
          localStorage.setItem('user',JSON.stringify(x));
          this.currentUserSource.next(x);
        }
      })
    );
  }
  
  Logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  Register(data:any){
    return this.http.post<any>(this.appAPIUrl+'/account/register',data);
  }
  
  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }

 
}
