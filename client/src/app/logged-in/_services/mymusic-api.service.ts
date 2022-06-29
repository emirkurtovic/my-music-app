import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomHttpParamEncoder } from '../_models/custom-encoder';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root'
})
export class MymusicApiService {

  paginatedResult: PaginatedResult<any[]>=new PaginatedResult<any[]>();
  readonly appAPIUrl = environment.appAPIUrl;
  constructor(private http: HttpClient) { }

  //Songs
  getSongsList(pageNumber:number|undefined,searchString:string|null,favorite:number,
    artist:string|null,category:string|null,rating:number)
    :Observable<PaginatedResult<any>>{
    
    let _params = new HttpParams({encoder: new CustomHttpParamEncoder()});

    if(pageNumber!=undefined) _params=_params.append('CurrentPage',String(pageNumber));
    if(searchString!=null) _params=_params.append('searchString',searchString);
    _params=_params.append('favorite',String(favorite));
    if(artist!=null) _params=_params.append('artist',artist);
    if(category!=null) _params=_params.append('category',category);
    _params=_params.append('rating',String(rating));
    
    //console.log(favorite);

    return this.http.get<any>(this.appAPIUrl+'/songs',{
      headers: new HttpHeaders({Authorization: 'Bearer '+JSON.parse(String(localStorage.getItem('user'))).token}),
      observe: 'response',
      params: _params
    }).pipe(map(x=>{
      this.paginatedResult.result=x.body;
      if(x.headers.get('Pagination')!=null) {
        this.paginatedResult.pagination=JSON.parse(String(x.headers.get('Pagination')));
      }
      return this.paginatedResult;
    }));
  }

  addSong(data:any){
    return this.http.post(this.appAPIUrl+'/songs',data,{headers: new HttpHeaders({Authorization: 'Bearer '+JSON.parse(String(localStorage.getItem('user'))).token})});
  }
  updateSong(id:number, data:any){
    return this.http.put(this.appAPIUrl+'/songs/'+id,data,{headers: new HttpHeaders({Authorization: 'Bearer '+JSON.parse(String(localStorage.getItem('user'))).token})});
  }
  deleteSong(id:number){
    return this.http.delete(this.appAPIUrl+'/songs/'+id,{headers: new HttpHeaders({Authorization: 'Bearer '+JSON.parse(String(localStorage.getItem('user'))).token})});
  }

  //Song categories
  getSongCategoriesList():Observable<any[]>{
    return this.http.get<any>(this.appAPIUrl+'/songCategories',{headers: new HttpHeaders({Authorization: 'Bearer '+JSON.parse(String(localStorage.getItem('user'))).token})});
  }
  //Artists 
  getArtistsList():Observable<any[]>{
    return this.http.get<any>(this.appAPIUrl+'/artists',{headers: new HttpHeaders({Authorization: 'Bearer '+JSON.parse(String(localStorage.getItem('user'))).token})});
  }

}
