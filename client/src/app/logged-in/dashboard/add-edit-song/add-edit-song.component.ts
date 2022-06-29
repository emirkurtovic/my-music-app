import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { findIndex, Subscription } from 'rxjs';
import { MymusicApiService } from '../../_services/mymusic-api.service';

@Component({
  selector: 'app-add-edit-song',
  templateUrl: './add-edit-song.component.html',
  styleUrls: ['./add-edit-song.component.css']
})
export class AddEditSongComponent implements OnInit {

  ////////////////////
  @Input() SongCategoriesList!:any[];
  @Input() childComponentAdd:any=true;
  @Input() SelectedSong:any;
  @Output() openedEvent=new EventEmitter<boolean>();

  //atributi
  SongId:number=0;
  SongName:string="";
  SongFav:number=0;
  SongArtist:string="";
  SongCategoryId!:number;
  SongCategoryName:string="";
  SongRating:number=1;
  SongUrl:string="";
  SongDateAdded:string="";
  SongDateEdited:string="";

  categoryNg:any;
  
  sub!: Subscription;
  sub2!:Subscription;
  
  currentStyles: Record<string, string> = {};
  currentClasses: Record<string, boolean> = {};
  ////////////////////

  
  constructor(private service: MymusicApiService, private router: Router, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.setCurrentStyles();
    this.setCurrentClasses();
    if(this.childComponentAdd===false){
      //console.log(this.SelectedSong);
      this.SongId=this.SelectedSong.song.id;
      this.SongName=this.SelectedSong.song.name;
      this.SongFav=this.SelectedSong.song.favorite;
      this.SongArtist=this.SelectedSong.song.artist;
      this.SongCategoryId=this.SelectedSong.song.categoryid;
      this.SongCategoryName=this.SelectedSong.categoryName;
      this.SongRating=this.SelectedSong.song.rating;
      this.SongUrl=this.SelectedSong.song.url;

      //console.log("date added "+ this.SelectedSong.song.dateAdded);
      //console.log("date edited "+ this.SelectedSong.song.dateEdited);

      //posto za sqllite izgleda ne radi DateTimeKind, ovdje cemo dodati Z - za UTC

      var date= new Date(this.SelectedSong.song.dateAdded+"Z");
      this.SongDateAdded=date.toLocaleString();
    
      date= new Date(this.SelectedSong.song.dateEdited+"Z");
      this.SongDateEdited=date.toLocaleString();
     
      this.categoryNg=this.SongCategoriesList.find(x=>x.name==this.SelectedSong.categoryName);
    }
    else{
      this.loadCategories();
    }
  }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
    if(this.sub2){
      this.sub2.unsubscribe();
    }
  }

  updateSong(){
    var song={
      Id:this.SongId,
      Name:this.SongName,
      Artist:this.SongArtist,
      Url:this.SongUrl,
      Rating:this.SongRating,
      Favorite:Number(this.SongFav),
      SongCategoryId:this.categoryNg.id
    };
    //console.log("update info:"+ song.Favorite);
    this.sub=this.service.updateSong(Number(this.SongId),song).subscribe({
      next: (res)=>{
        this.toastService.success("Song Updated Successfully!");
        this.openedEvent.emit(false);
      },
      error: (err)=>{
        this.toastService.error(err.error);
      }
    });
  }

  loadCategories(){
    this.sub=this.service.getSongCategoriesList().subscribe(data=>{
      this.SongCategoriesList=data;
    });
  }

  addSong(){
    var song={
      Name:this.SongName,
      Artist:this.SongArtist,
      Url:this.SongUrl,
      Rating:this.SongRating,
      Favorite:Number(this.SongFav),
      SongCategoryId:this.categoryNg.id
    };
    //console.log(song);
    this.sub2=this.service.addSong(song).subscribe({
      next: (res)=>{
        this.toastService.success("Song Added Successfully!");
        this.router.navigateByUrl('/');
      },
      error: (err)=>{
        this.toastService.error(err.error);
      }
    });
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'padding-top':  this.childComponentAdd===true? '100px' : 'initial',
      'height': this.childComponentAdd===true? 'calc(100vh - 56px)' : 'initial'
    };
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      'bg-dark': this.childComponentAdd,
      'bg-gradient':  this.childComponentAdd
    };
  }
}