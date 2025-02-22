import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type FilterComponentFilterData = {
  favorite: boolean;
  artist:string;
  category:string;
  rating:number;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  //#region Inputs & Outputs
  @Input() SongCategoriesList!:any[];
  @Input() ArtistsList!:any[];
  @Input() SongArtist!:string|null;
  @Input() SongFav!:boolean;
  @Input() SongCategoryName!:string|null;
  @Input() SongRating!:number;

  @Output() onApplyEvent=new EventEmitter<any>();
  //#endregion
  
  categoryNg:any;
  artistNg:any;

  constructor() { }

  ngOnInit(): void {
    this.artistNg=this.SongArtist;
    this.categoryNg=this.SongCategoriesList.find(x=>x.name==this.SongCategoryName);
  }
  apply(){
    const filterData:FilterComponentFilterData ={
      favorite:this.SongFav,
      artist:this.artistNg,
      category:this.categoryNg,
      rating:this.SongRating
    }
    this.onApplyEvent.emit(filterData);
  }
}
