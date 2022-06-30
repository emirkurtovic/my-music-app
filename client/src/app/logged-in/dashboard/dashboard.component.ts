import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { PaginatedResult, Pagination } from '../_models/pagination';
import { MymusicApiService } from '../_services/mymusic-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  //filteri i paging
  searchString!:string|null;
  favorite:number=0;
  artist!:string|null;
  category!:string|null;
  rating:number=1;
  
  //api results;
  SongsList!:any[];
  pagination!:Pagination;
  sub!: Subscription;
  sub2!: Subscription;
  sub3!: Subscription;

  ///
  SongCategoriesList!:any[];
  ArtistsList!:any[];

  childComponentOpen:boolean=false;
  childComponentOpen2:boolean=false;
  childComponentAdd:boolean=true;
  ///

  //pagination params
  pageNumber!:number;
  pageSize!:number;
  totalCount!:number;
  totalPages!:number;

  //modals
  modalRef?: BsModalRef;
  modalRef2?: BsModalRef;
  SelectedSong:any;

  constructor(private service: MymusicApiService,private modalService: BsModalService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    //nisu ovisni - ne mora combineLatest npr
    this.loadSongs();
    this.loadArtists();
    this.loadCategories();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

  loadSongs(){
    this.sub=this.service.getSongsList(this.pageNumber,this.searchString,this.favorite,this.artist,this.category,this.rating).subscribe(data=>{
      this.SongsList=data.result;
      if(data.pagination) {
        this.pagination=data.pagination;
      }
    });
  }
  loadArtists(){
    this.sub2=this.service.getArtistsList().subscribe(data=>{
      this.ArtistsList=data;
      console.log(this.ArtistsList);
    });
  }
  loadCategories(){
    this.sub3=this.service.getSongCategoriesList().subscribe(data=>{
      this.SongCategoriesList=data;
    });
  }
  refreshSongsAndArtists(){
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.loadSongs();
    this.loadArtists();
  }
  pageChanged(event: any){
    this.pageNumber=event.page;
    console.log(this.pageNumber);
    this.loadSongs();
  }

  editModal(template: TemplateRef<any>, item:any){
    this.childComponentAdd=false;
    this.SelectedSong=item;
    this.childComponentOpen=true;
    this.modalRef=this.modalService.show(template);
  }

  filterModal(template: TemplateRef<any>){
    this.childComponentOpen2=true;
    this.modalRef2=this.modalService.show(template);
  }

  deleteSong(id:number){
    if(confirm("Are you sure that you want to delete song?")){
      this.sub.unsubscribe();
      this.sub=this.service.deleteSong(id).subscribe({
        next: (res)=>{
          this.toastrService.success("Song Deleted Successfully!");
          this.refreshSongsAndArtists();
        },
        error: (err)=>{
          this.toastrService.error(err.error);
        }
      });
    }
  }

  closeEditModal(event:boolean){
    this.childComponentOpen=false;
    this.modalRef?.hide();
    this.refreshSongsAndArtists();
  }

  closeFilterModal(event:any){
    this.childComponentOpen2=false;
    this.modalRef2?.hide();
    this.favorite=event.favorite;
    this.artist=event.artist;
    if(event.category) this.category=event.category.name;
    this.rating=event.rating;
    //console.log("favorite" + this.favorite);
    this.search();
  }
  
  clearFilters(){
    this.searchString=null;
    this.favorite=0;
    this.artist=null;
    this.category=null;
    this.rating=1;
    this.search();
  }

  search(){
    this.sub.unsubscribe();
    //console.log("favorite" + this.favorite);
    this.loadSongs();
  }

}
