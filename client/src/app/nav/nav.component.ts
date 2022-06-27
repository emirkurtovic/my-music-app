import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountApiService } from '../_services/account-api.service';
import { BsModalService,BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  childComponentOpen:boolean=false;
  childComponentLogin:boolean=true;
  ModalTitle:string="";
  loggedIn!:boolean;
  username:string="";
  
  sub!:Subscription;

  modalRef?: BsModalRef;
  
  constructor(private accountService:AccountApiService,private router:Router,private modalService: BsModalService ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loginModal(template: TemplateRef<any>){
    this.childComponentOpen=true;
    this.childComponentLogin=true;
    this.ModalTitle="Login";
    this.modalRef=this.modalService.show(template);
  }
  registerModal(template: TemplateRef<any>){
    this.childComponentOpen=true;
    this.childComponentLogin=false;
    this.ModalTitle="Register";
    this.modalRef=this.modalService.show(template);
  }
  closeModal(event:boolean){
    this.modalRef?.hide();
    //this.childComponentOpen=event;
    //prebaciti mozda kasnije u child->parent komunikaciju
  }

  getCurrentUser(){
    this.sub=this.accountService.currentUser$.subscribe(res=>{
      this.loggedIn=!!res;
      if(res) this.username=res.username;
    });
  }

  logout(){
    this.accountService.Logout();
    this.router.navigateByUrl('/');
  }

}
