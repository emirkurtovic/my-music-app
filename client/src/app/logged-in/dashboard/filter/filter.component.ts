import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  ////////////////////
  @Input() SongCategoriesList!:any[];
  @Input() ArtistsList!:any[];
  @Input() SongArtist!:string|null;
  @Input() SongFav!:number;
  @Input() SongCategoryName!:string|null;
  @Input() SongRating!:number|null;

  @Output() openedEvent=new EventEmitter<any>();

  //

  categoryNg:any;
  artistNg:any;

  ////////////////////

  constructor() { }

  ngOnInit(): void {
    this.artistNg=this.SongArtist;
    this.categoryNg=this.SongCategoriesList.find(x=>x.name==this.SongCategoryName);
  }
  apply(){
    this.openedEvent.emit({favorite:Number(this.SongFav),artist:this.artistNg,category:this.categoryNg,rating:this.SongRating});
  }
}
