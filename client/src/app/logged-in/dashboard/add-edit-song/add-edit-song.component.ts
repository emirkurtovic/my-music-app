import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { findIndex, Subscription } from 'rxjs';
import { MymusicApiService } from '../../_services/mymusic-api.service';
import { SongInputDTO, SongOutputDTO } from '../../_models/song';

@Component({
  selector: 'app-add-edit-song',
  templateUrl: './add-edit-song.component.html',
  styleUrls: ['./add-edit-song.component.css']
})
export class AddEditSongComponent implements OnInit {

  //#region Inputs & Outputs
  @Input() SongCategoriesList!:string[];
  @Input() childComponentAdd:any=true;
  @Input() SelectedSong!:SongOutputDTO;
  @Output() openedEvent=new EventEmitter<boolean>();
  //#endregion

  songNg : SongOutputDTO = {id: 0, name:"", favorite: false, artist:"", songCategory:"", rating:1, url:"", dateAdded:"",dateEdited:""};

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
      
      this.songNg.id=this.SelectedSong.id;
      this.songNg.name=this.SelectedSong.name;
      this.songNg.favorite=this.SelectedSong.favorite;
      this.songNg.artist=this.SelectedSong.artist;
      this.songNg.songCategory=this.SelectedSong.songCategory;
      this.songNg.rating=this.SelectedSong.rating;
      this.songNg.url=this.SelectedSong.url ?? "";

      var date= new Date(this.SelectedSong.dateAdded);
      this.songNg.dateAdded=date.toLocaleString();
    
      date= new Date(this.SelectedSong.dateEdited);
      this.songNg.dateEdited=date.toLocaleString();
     
      this.songNg.songCategory=this.SongCategoriesList.find(x=>x==this.SelectedSong.songCategory)!;
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
    var song: SongInputDTO={
      name:this.songNg.name,
      artist:this.songNg.artist,
      url:this.songNg.url,
      rating:this.songNg.rating,
      favorite:this.songNg.favorite,
      songCategory:this.songNg.songCategory
    };
    //console.log("update info:"+ song.Favorite);
    this.sub=this.service.updateSong(Number(this.songNg.id),song).subscribe({
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
    var song: SongInputDTO={
      name:this.songNg.name,
      artist:this.songNg.artist,
      url:this.songNg.url,
      rating:this.songNg.rating,
      favorite:this.songNg.favorite,
      songCategory: this.songNg.songCategory
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
