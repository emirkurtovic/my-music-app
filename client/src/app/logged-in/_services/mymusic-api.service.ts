import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomHttpParamEncoder } from '../_models/custom-encoder';
import { PaginatedResult } from '../_models/pagination';
import { SongOutputDTO } from '../_models/song';

@Injectable({
  providedIn: 'root'
})
export class MymusicApiService {

  paginatedResult: PaginatedResult<any[]>=new PaginatedResult<any[]>();
  readonly appAPIUrl = environment.appAPIUrl;
  constructor(private http: HttpClient) { }

  //Songs
  getSongsList(
    pageNumber:number|undefined,
    searchString:string|null,
    favorite:boolean,
    artist:string|null,
    category:string|null,
    rating:number
  ):Observable<PaginatedResult<any>>{
    
    let _params = new HttpParams({encoder: new CustomHttpParamEncoder()});

    if (pageNumber!=undefined){
      _params=_params.append('currentPage',String(pageNumber));
    }
    if (searchString!=null){
      _params=_params.append('searchString',searchString);
    }
    _params=_params.append('favorite',String(favorite));
    if (artist!=null){
      _params=_params.append('artist',artist);
    }
    if (category!=null){
      _params=_params.append('songCategory',category);
    }
    _params=_params.append('rating',String(rating));
    
    //console.log(favorite);

    return this.http.get<any>(this.appAPIUrl+'/songs',{
      headers: new HttpHeaders({Authorization: 'Bearer '+JSON.parse(String(localStorage.getItem('user'))).token}),
      observe: 'response',
      params: _params
    }).pipe(map(x=>{
      this.paginatedResult.result=x.body as SongOutputDTO[];
      if(x.headers.get('Pagination')!=null) {
        this.paginatedResult.pagination=JSON.parse(String(x.headers.get('Pagination')));
      }
      return this.paginatedResult;
    }));
  }

  addSong(data:any){
    return this.http.post(this.appAPIUrl+'/songs',data,{headers: this.getHttpHeaders()});
  }
  updateSong(id:number, data:any){
    return this.http.put(this.appAPIUrl+'/songs/'+id,data,{headers: this.getHttpHeaders()});
  }
  deleteSong(id:number){
    return this.http.delete(this.appAPIUrl+'/songs/'+id,{headers: this.getHttpHeaders()});
  }

  //Song categories
  getSongCategoriesList():Observable<any[]>{
    return this.http.get<any>(this.appAPIUrl+'/songCategories',{headers: this.getHttpHeaders()});
  }
  //Artists 
  getArtistsList():Observable<any[]>{
    return this.http.get<any>(this.appAPIUrl+'/artists',{headers: this.getHttpHeaders()});
  }

  getHttpHeaders(): HttpHeaders{
    const result = new HttpHeaders({Authorization: 'Bearer '+JSON.parse(String(localStorage.getItem('user'))).token});
    return result;
  }
}
