"use strict";(self.webpackChunkMyMusicApp_Angular=self.webpackChunkMyMusicApp_Angular||[]).push([[879],{879:(bt,f,p)=>{p.r(f),p.d(f,{LoggedInModule:()=>xt});var c=p(9808),_=p(8698),t=p(4893),h=p(520),T=p(4004),A=p(2340);class P{encodeKey(a){return encodeURIComponent(a)}encodeValue(a){return encodeURIComponent(a)}decodeKey(a){return decodeURIComponent(a)}decodeValue(a){return decodeURIComponent(a)}}class y{}let C=(()=>{class i{constructor(e){this.http=e,this.paginatedResult=new y,this.appAPIUrl=A.N.appAPIUrl}getSongsList(e,n,o,s,r,d){let g=new h.LE({encoder:new P});return null!=e&&(g=g.append("currentPage",String(e))),null!=n&&(g=g.append("searchString",n)),g=g.append("favorite",String(o)),null!=s&&(g=g.append("artist",s)),null!=r&&(g=g.append("songCategory",r)),g=g.append("rating",String(d)),this.http.get(this.appAPIUrl+"/songs",{headers:new h.WM({Authorization:"Bearer "+JSON.parse(String(localStorage.getItem("user"))).token}),observe:"response",params:g}).pipe((0,T.U)(u=>(this.paginatedResult.result=u.body,null!=u.headers.get("Pagination")&&(this.paginatedResult.pagination=JSON.parse(String(u.headers.get("Pagination")))),this.paginatedResult)))}addSong(e){return this.http.post(this.appAPIUrl+"/songs",e,{headers:this.getHttpHeaders()})}updateSong(e,n){return this.http.put(this.appAPIUrl+"/songs/"+e,n,{headers:this.getHttpHeaders()})}deleteSong(e){return this.http.delete(this.appAPIUrl+"/songs/"+e,{headers:this.getHttpHeaders()})}getSongCategoriesList(){return this.http.get(this.appAPIUrl+"/songCategories",{headers:this.getHttpHeaders()})}getArtistsList(){return this.http.get(this.appAPIUrl+"/artists",{headers:this.getHttpHeaders()})}getHttpHeaders(){return new h.WM({Authorization:"Bearer "+JSON.parse(String(localStorage.getItem("user"))).token})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(h.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var x=p(2290),l=p(2382);function M(i,a){1&i&&(t.TgZ(0,"h4",28),t._uU(1,"Add Song"),t.qZA())}function Z(i,a){1&i&&(t.TgZ(0,"p",29),t._uU(1," *Name must contain between 1 and 200 characters. "),t.qZA())}function N(i,a){1&i&&(t.TgZ(0,"p",29),t._uU(1," *Artist name must contain between 1 and 200 characters. "),t.qZA())}function k(i,a){if(1&i&&(t.TgZ(0,"option",30),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e)}}function w(i,a){1&i&&(t.TgZ(0,"p",29),t._uU(1," *Category must be specified. "),t.qZA())}function J(i,a){1&i&&(t.TgZ(0,"p",29),t._uU(1," *Rating must be between 1 and 5. "),t.qZA())}function L(i,a){1&i&&(t.TgZ(0,"p",29),t._uU(1," *Url cannot contain more than 200 characters. "),t.qZA())}function F(i,a){if(1&i&&(t.TgZ(0,"div",4)(1,"label",31),t._uU(2,"Date Added"),t.qZA(),t._UZ(3,"input",32),t.qZA()),2&i){const e=t.oxw();t.xp6(3),t.s9C("value",e.songNg.dateAdded)}}function O(i,a){if(1&i&&(t.TgZ(0,"div",4)(1,"label",33),t._uU(2,"Last Edited"),t.qZA(),t._UZ(3,"input",34),t.qZA()),2&i){const e=t.oxw();t.xp6(3),t.s9C("value",e.songNg.dateEdited)}}function q(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){return t.CHM(e),t.oxw().addSong()}),t._uU(1," Add "),t.qZA()}if(2&i){t.oxw();const e=t.MAs(9),n=t.MAs(21),o=t.MAs(27),s=t.MAs(34),r=t.MAs(40);t.Q6J("disabled",e.invalid||n.invalid||o.invalid||s.invalid||r.invalid)}}function I(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){return t.CHM(e),t.oxw().updateSong()}),t._uU(1," Update "),t.qZA()}if(2&i){t.oxw();const e=t.MAs(9),n=t.MAs(21),o=t.MAs(27),s=t.MAs(34),r=t.MAs(40),d=t.MAs(16);t.Q6J("disabled",e.invalid||n.invalid||o.invalid||s.invalid||r.invalid||!(e.dirty||d.dirty||n.dirty||o.dirty||s.dirty||r.dirty))}}let b=(()=>{class i{constructor(e,n,o){this.service=e,this.router=n,this.toastService=o,this.childComponentAdd=!0,this.openedEvent=new t.vpe,this.songNg={id:0,name:"",favorite:!1,artist:"",songCategory:"",rating:1,url:"",dateAdded:"",dateEdited:""},this.currentStyles={},this.currentClasses={}}ngOnInit(){var e;if(this.setCurrentStyles(),this.setCurrentClasses(),!1===this.childComponentAdd){this.songNg.id=this.SelectedSong.id,this.songNg.name=this.SelectedSong.name,this.songNg.favorite=this.SelectedSong.favorite,this.songNg.artist=this.SelectedSong.artist,this.songNg.songCategory=this.SelectedSong.songCategory,this.songNg.rating=this.SelectedSong.rating,this.songNg.url=null!==(e=this.SelectedSong.url)&&void 0!==e?e:"";var n=new Date(this.SelectedSong.dateAdded);this.songNg.dateAdded=n.toLocaleString(),n=new Date(this.SelectedSong.dateEdited),this.songNg.dateEdited=n.toLocaleString(),this.songNg.songCategory=this.SongCategoriesList.find(o=>o==this.SelectedSong.songCategory)}else this.loadCategories()}ngOnDestroy(){this.sub&&this.sub.unsubscribe(),this.sub2&&this.sub2.unsubscribe()}updateSong(){var e={name:this.songNg.name,artist:this.songNg.artist,url:this.songNg.url,rating:this.songNg.rating,favorite:this.songNg.favorite,songCategory:this.songNg.songCategory};this.sub=this.service.updateSong(Number(this.songNg.id),e).subscribe({next:n=>{this.toastService.success("Song Updated Successfully!"),this.openedEvent.emit(!1)},error:n=>{this.toastService.error(n.error)}})}loadCategories(){this.sub=this.service.getSongCategoriesList().subscribe(e=>{this.SongCategoriesList=e})}addSong(){this.sub2=this.service.addSong({name:this.songNg.name,artist:this.songNg.artist,url:this.songNg.url,rating:this.songNg.rating,favorite:this.songNg.favorite,songCategory:this.songNg.songCategory}).subscribe({next:n=>{this.toastService.success("Song Added Successfully!"),this.router.navigateByUrl("/")},error:n=>{this.toastService.error(n.error)}})}setCurrentStyles(){this.currentStyles={"padding-top":!0===this.childComponentAdd?"100px":"initial",height:!0===this.childComponentAdd?"calc(100vh - 56px)":"initial"}}setCurrentClasses(){this.currentClasses={"bg-dark":this.childComponentAdd,"bg-gradient":this.childComponentAdd}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C),t.Y36(_.F0),t.Y36(x._W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-edit-song"]],inputs:{SongCategoriesList:"SongCategoriesList",childComponentAdd:"childComponentAdd",SelectedSong:"SelectedSong"},outputs:{openedEvent:"openedEvent"},decls:47,vars:21,consts:[[3,"ngClass","ngStyle"],[3,"ngClass"],["class","text-light",4,"ngIf"],[1,"mb-3"],[1,"d-flex","flex-row","align-items-baseline","mb-3"],["for","SongName",1,"form-label","col-3","text-white"],["type","text","name","SongName","id","SongName","required","","maxlength","200",1,"form-control","bg-dark","text-white",3,"ngModel","ngModelChange"],["nameV","ngModel"],["class","text-danger",4,"ngIf"],["for","SongFav",1,"form-check-label","col-3","text-white"],["type","checkbox","name","SongFav","id","SongFav",1,"form-check-input","bg-dark",2,"border-color","white",3,"ngModel","ngModelChange"],["favV","ngModel"],["for","SongArtist",1,"form-label","col-3","text-white"],["type","text","name","SongArtist","id","SongArtist","required","","maxlength","200",1,"form-control","bg-dark","text-white",3,"ngModel","ngModelChange"],["artistV","ngModel"],["for","SongCategory",1,"form-label","col-3","text-white"],["required","","name","SongCategory","id","SongCategory",1,"form-control","bg-dark","text-white",3,"ngModel","ngModelChange"],["CategoryV","ngModel"],[3,"ngValue",4,"ngFor","ngForOf"],["for","SongRating",1,"form-label","col-3","text-white"],["type","number","name","SongRating","id","SongRating","required","","min","1","max","5",1,"form-control","bg-dark","text-white",3,"ngModel","ngModelChange"],["ratingV","ngModel"],["for","SongUrl",1,"form-label","col-3","text-white"],["type","text","name","SongUrl","id","SongUrl","maxlength","200",1,"form-control","bg-dark","text-white",3,"ngModel","ngModelChange"],["urlV","ngModel"],["class","d-flex flex-row align-items-baseline mb-3",4,"ngIf"],[1,"d-flex","justify-content-center"],["class","btn btn-primary",3,"disabled","click",4,"ngIf"],[1,"text-light"],[1,"text-danger"],[3,"ngValue"],["for","SongDateAdded",1,"form-label","col-3","text-white"],["type","text","name","SongDateAdded","id","SongDateAdded","disabled","",1,"form-control","bg-secondary","text-white",3,"value"],["for","SongDateEdited",1,"form-label","col-3","text-white"],["type","text","name","SongDateEdited","id","SongDateEdited","disabled","",1,"form-control","bg-secondary","text-white",3,"value"],[1,"btn","btn-primary",3,"disabled","click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,M,2,0,"h4",2),t.TgZ(3,"form",1)(4,"div",3)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t.TgZ(8,"input",6,7),t.NdJ("ngModelChange",function(s){return n.songNg.name=s}),t.qZA()(),t.YNc(10,Z,2,0,"p",8),t.TgZ(11,"div",4)(12,"label",9),t._uU(13,"Favorite"),t.qZA(),t.TgZ(14,"div")(15,"input",10,11),t.NdJ("ngModelChange",function(s){return n.songNg.favorite=s}),t.qZA()()(),t.TgZ(17,"div",4)(18,"label",12),t._uU(19,"Artist"),t.qZA(),t.TgZ(20,"input",13,14),t.NdJ("ngModelChange",function(s){return n.songNg.artist=s}),t.qZA()(),t.YNc(22,N,2,0,"p",8),t.TgZ(23,"div",4)(24,"label",15),t._uU(25,"Category"),t.qZA(),t.TgZ(26,"select",16,17),t.NdJ("ngModelChange",function(s){return n.songNg.songCategory=s}),t.YNc(28,k,2,2,"option",18),t.qZA()(),t.YNc(29,w,2,0,"p",8),t.TgZ(30,"div",4)(31,"label",19),t._uU(32,"Rating"),t.qZA(),t.TgZ(33,"input",20,21),t.NdJ("ngModelChange",function(s){return n.songNg.rating=s}),t.qZA()(),t.YNc(35,J,2,0,"p",8),t.TgZ(36,"div",4)(37,"label",22),t._uU(38,"Url"),t.qZA(),t.TgZ(39,"input",23,24),t.NdJ("ngModelChange",function(s){return n.songNg.url=s}),t.qZA()(),t.YNc(41,L,2,0,"p",8),t.YNc(42,F,4,1,"div",25),t.YNc(43,O,4,1,"div",25),t.TgZ(44,"div",26),t.YNc(45,q,2,1,"button",27),t.YNc(46,I,2,1,"button",27),t.qZA()()()()()),2&e){const o=t.MAs(9),s=t.MAs(21),r=t.MAs(27),d=t.MAs(34),g=t.MAs(40);t.Q6J("ngClass",n.currentClasses)("ngStyle",n.currentStyles),t.xp6(1),t.Q6J("ngClass",n.childComponentAdd?"container":""),t.xp6(1),t.Q6J("ngIf",!0===n.childComponentAdd),t.xp6(1),t.Q6J("ngClass",n.childComponentAdd?"col-md-6 mt-3":""),t.xp6(5),t.Q6J("ngModel",n.songNg.name),t.xp6(2),t.Q6J("ngIf",o.invalid&&(o.dirty||o.touched)),t.xp6(5),t.Q6J("ngModel",n.songNg.favorite),t.xp6(5),t.Q6J("ngModel",n.songNg.artist),t.xp6(2),t.Q6J("ngIf",s.invalid&&(s.dirty||s.touched)),t.xp6(4),t.Q6J("ngModel",n.songNg.songCategory),t.xp6(2),t.Q6J("ngForOf",n.SongCategoriesList),t.xp6(1),t.Q6J("ngIf",r.invalid&&(r.dirty||r.touched)),t.xp6(4),t.Q6J("ngModel",n.songNg.rating),t.xp6(2),t.Q6J("ngIf",d.invalid&&(d.dirty||d.touched)),t.xp6(4),t.Q6J("ngModel",n.songNg.url),t.xp6(2),t.Q6J("ngIf",g.invalid&&(g.dirty||g.touched)),t.xp6(1),t.Q6J("ngIf",!1===n.childComponentAdd),t.xp6(1),t.Q6J("ngIf",!1===n.childComponentAdd),t.xp6(2),t.Q6J("ngIf",!0===n.childComponentAdd),t.xp6(1),t.Q6J("ngIf",!1===n.childComponentAdd)}},directives:[c.mk,c.PC,c.O5,l._Y,l.JL,l.F,l.Fj,l.Q7,l.nD,l.JJ,l.On,l.Wl,l.EJ,c.sg,l.YN,l.Kr,l.qQ,l.Fd,l.wV],styles:[""]}),i})();var U=p(6690);const E=function(i,a){return{"pull-left":i,"float-left":a}},Q=function(i,a){return{"pull-right":i,"float-right":a}},m=function(i,a){return{disabled:i,currentPage:a}};function D(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"li",11)(1,"a",12),t.NdJ("click",function(o){return t.CHM(e),t.oxw().selectPage(1,o)}),t.GkF(2,13),t.qZA()()}if(2&i){const e=t.oxw(),n=t.MAs(13);t.ekj("disabled",e.noPrevious()||e.disabled),t.xp6(2),t.Q6J("ngTemplateOutlet",e.customFirstTemplate||n)("ngTemplateOutletContext",t.WLB(4,m,e.noPrevious()||e.disabled,e.page))}}function Y(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"li",14)(1,"a",12),t.NdJ("click",function(o){t.CHM(e);const s=t.oxw();return s.selectPage(s.page-1,o)}),t.GkF(2,13),t.qZA()()}if(2&i){const e=t.oxw(),n=t.MAs(11);t.ekj("disabled",e.noPrevious()||e.disabled),t.xp6(2),t.Q6J("ngTemplateOutlet",e.customPreviousTemplate||n)("ngTemplateOutletContext",t.WLB(4,m,e.noPrevious()||e.disabled,e.page))}}const R=function(i,a,e){return{disabled:i,$implicit:a,currentPage:e}};function z(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"li",15)(1,"a",12),t.NdJ("click",function(o){const r=t.CHM(e).$implicit;return t.oxw().selectPage(r.number,o)}),t.GkF(2,13),t.qZA()()}if(2&i){const e=a.$implicit,n=t.oxw(),o=t.MAs(7);t.ekj("active",e.active)("disabled",n.disabled&&!e.active),t.xp6(2),t.Q6J("ngTemplateOutlet",n.customPageTemplate||o)("ngTemplateOutletContext",t.kEZ(6,R,n.disabled,e,n.page))}}function B(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"li",16)(1,"a",12),t.NdJ("click",function(o){t.CHM(e);const s=t.oxw();return s.selectPage(s.page+1,o)}),t.GkF(2,13),t.qZA()()}if(2&i){const e=t.oxw(),n=t.MAs(9);t.ekj("disabled",e.noNext()||e.disabled),t.xp6(2),t.Q6J("ngTemplateOutlet",e.customNextTemplate||n)("ngTemplateOutletContext",t.WLB(4,m,e.noNext()||e.disabled,e.page))}}function V(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"li",17)(1,"a",12),t.NdJ("click",function(o){t.CHM(e);const s=t.oxw();return s.selectPage(s.totalPages,o)}),t.GkF(2,13),t.qZA()()}if(2&i){const e=t.oxw(),n=t.MAs(15);t.ekj("disabled",e.noNext()||e.disabled),t.xp6(2),t.Q6J("ngTemplateOutlet",e.customLastTemplate||n)("ngTemplateOutletContext",t.WLB(4,m,e.noNext()||e.disabled,e.page))}}function H(i,a){1&i&&t._uU(0),2&i&&t.Oqu(a.$implicit.text)}function j(i,a){if(1&i&&t._uU(0),2&i){const e=t.oxw();t.Oqu(e.getText("next"))}}function $(i,a){if(1&i&&t._uU(0),2&i){const e=t.oxw();t.Oqu(e.getText("previous"))}}function W(i,a){if(1&i&&t._uU(0),2&i){const e=t.oxw();t.Oqu(e.getText("first"))}}function G(i,a){if(1&i&&t._uU(0),2&i){const e=t.oxw();t.Oqu(e.getText("last"))}}let v=(()=>{class i{constructor(){this.main={itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",pageBtnClass:"",rotate:!0},this.pager={itemsPerPage:15,previousText:"\xab Previous",nextText:"Next \xbb",pageBtnClass:"",align:!0}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const X={provide:l.JU,useExisting:(0,t.Gpc)(()=>K),multi:!0};let K=(()=>{class i{constructor(e,n,o){this.elementRef=e,this.changeDetection=o,this.align=!1,this.boundaryLinks=!1,this.directionLinks=!0,this.firstText="First",this.previousText="\xab Previous",this.nextText="Next \xbb",this.lastText="Last",this.rotate=!0,this.pageBtnClass="",this.disabled=!1,this.numPages=new t.vpe,this.pageChanged=new t.vpe,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.classMap="",this.inited=!1,this._itemsPerPage=15,this._totalItems=0,this._totalPages=0,this._page=1,this.elementRef=e,this.config||this.configureOptions(Object.assign({},n.main,n.pager))}get itemsPerPage(){return this._itemsPerPage}set itemsPerPage(e){this._itemsPerPage=e,this.totalPages=this.calculateTotalPages()}get totalItems(){return this._totalItems}set totalItems(e){this._totalItems=e,this.totalPages=this.calculateTotalPages()}get totalPages(){return this._totalPages}set totalPages(e){this._totalPages=e,this.numPages.emit(e),this.inited&&this.selectPage(this.page)}get page(){return this._page}set page(e){const n=this._page;this._page=e>this.totalPages?this.totalPages:e||1,this.changeDetection.markForCheck(),n!==this._page&&void 0!==n&&this.pageChanged.emit({page:this._page,itemsPerPage:this.itemsPerPage})}configureOptions(e){this.config=Object.assign({},e)}ngOnInit(){var e,n,o,s,r,d;"undefined"!=typeof window&&(this.classMap=this.elementRef.nativeElement.getAttribute("class")||""),void 0===this.maxSize&&(this.maxSize=(null===(e=this.config)||void 0===e?void 0:e.maxSize)||0),void 0===this.rotate&&(this.rotate=!!(null===(n=this.config)||void 0===n?void 0:n.rotate)),void 0===this.boundaryLinks&&(this.boundaryLinks=!!(null===(o=this.config)||void 0===o?void 0:o.boundaryLinks)),void 0===this.directionLinks&&(this.directionLinks=!!(null===(s=this.config)||void 0===s?void 0:s.directionLinks)),void 0===this.pageBtnClass&&(this.pageBtnClass=(null===(r=this.config)||void 0===r?void 0:r.pageBtnClass)||""),void 0===this.itemsPerPage&&(this.itemsPerPage=(null===(d=this.config)||void 0===d?void 0:d.itemsPerPage)||0),this.totalPages=this.calculateTotalPages(),this.pages=this.getPages(this.page,this.totalPages),this.inited=!0}writeValue(e){this.page=e,this.pages=this.getPages(this.page,this.totalPages)}getText(e){return this[`${e}Text`]||this.config[`${e}Text`]}noPrevious(){return 1===this.page}noNext(){return this.page===this.totalPages}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}selectPage(e,n){n&&n.preventDefault(),this.disabled||(n&&n.target&&n.target.blur(),this.writeValue(e),this.onChange(this.page))}makePage(e,n,o){return{text:n,number:e,active:o}}getPages(e,n){const o=[];let s=1,r=n;const d=void 0!==this.maxSize&&this.maxSize<n;d&&this.maxSize&&(this.rotate?(s=Math.max(e-Math.floor(this.maxSize/2),1),r=s+this.maxSize-1,r>n&&(r=n,s=r-this.maxSize+1)):(s=(Math.ceil(e/this.maxSize)-1)*this.maxSize+1,r=Math.min(s+this.maxSize-1,n)));for(let g=s;g<=r;g++){const u=this.makePage(g,g.toString(),g===e);o.push(u)}if(d&&!this.rotate){if(s>1){const g=this.makePage(s-1,"...",!1);o.unshift(g)}if(r<n){const g=this.makePage(r+1,"...",!1);o.push(g)}}return o}calculateTotalPages(){const e=this.itemsPerPage<1?1:Math.ceil(this.totalItems/this.itemsPerPage);return Math.max(e||0,1)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(v),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["pager"]],inputs:{align:"align",maxSize:"maxSize",boundaryLinks:"boundaryLinks",directionLinks:"directionLinks",firstText:"firstText",previousText:"previousText",nextText:"nextText",lastText:"lastText",rotate:"rotate",pageBtnClass:"pageBtnClass",disabled:"disabled",itemsPerPage:"itemsPerPage",totalItems:"totalItems"},outputs:{numPages:"numPages",pageChanged:"pageChanged"},features:[t._Bn([X])],decls:7,vars:24,consts:[[1,"pager"],[3,"ngClass"],["href","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"ul",0)(1,"li",1)(2,"a",2),t.NdJ("click",function(s){return n.selectPage(n.page-1,s)}),t._uU(3),t.qZA()(),t.TgZ(4,"li",1)(5,"a",2),t.NdJ("click",function(s){return n.selectPage(n.page+1,s)}),t._uU(6),t.qZA()()()),2&e&&(t.xp6(1),t.Tol(n.pageBtnClass),t.ekj("disabled",n.noPrevious())("previous",n.align),t.Q6J("ngClass",t.WLB(18,E,n.align,n.align)),t.xp6(2),t.Oqu(n.getText("previous")),t.xp6(1),t.Tol(n.pageBtnClass),t.ekj("disabled",n.noNext())("next",n.align),t.Q6J("ngClass",t.WLB(21,Q,n.align,n.align)),t.xp6(2),t.Oqu(n.getText("next")))},directives:[c.mk],encapsulation:2}),i})();const tt={provide:l.JU,useExisting:(0,t.Gpc)(()=>S),multi:!0};let S=(()=>{class i{constructor(e,n,o){this.elementRef=e,this.changeDetection=o,this.align=!0,this.boundaryLinks=!1,this.directionLinks=!0,this.rotate=!0,this.pageBtnClass="",this.disabled=!1,this.numPages=new t.vpe,this.pageChanged=new t.vpe,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.classMap="",this.inited=!1,this._itemsPerPage=10,this._totalItems=0,this._totalPages=0,this._page=1,this.elementRef=e,this.config||this.configureOptions(n.main)}get itemsPerPage(){return this._itemsPerPage}set itemsPerPage(e){this._itemsPerPage=e,this.totalPages=this.calculateTotalPages()}get totalItems(){return this._totalItems}set totalItems(e){this._totalItems=e,this.totalPages=this.calculateTotalPages()}get totalPages(){return this._totalPages}set totalPages(e){this._totalPages=e,this.numPages.emit(e),this.inited&&this.selectPage(this.page)}get page(){return this._page}set page(e){const n=this._page;this._page=e>this.totalPages?this.totalPages:e||1,this.changeDetection.markForCheck(),n!==this._page&&void 0!==n&&this.pageChanged.emit({page:this._page,itemsPerPage:this.itemsPerPage})}configureOptions(e){this.config=Object.assign({},e)}ngOnInit(){var e,n,o,s,r,d;"undefined"!=typeof window&&(this.classMap=this.elementRef.nativeElement.getAttribute("class")||""),void 0===this.maxSize&&(this.maxSize=(null===(e=this.config)||void 0===e?void 0:e.maxSize)||0),void 0===this.rotate&&(this.rotate=!!(null===(n=this.config)||void 0===n?void 0:n.rotate)),void 0===this.boundaryLinks&&(this.boundaryLinks=!!(null===(o=this.config)||void 0===o?void 0:o.boundaryLinks)),void 0===this.directionLinks&&(this.directionLinks=!!(null===(s=this.config)||void 0===s?void 0:s.directionLinks)),void 0===this.pageBtnClass&&(this.pageBtnClass=(null===(r=this.config)||void 0===r?void 0:r.pageBtnClass)||""),void 0===this.itemsPerPage&&(this.itemsPerPage=(null===(d=this.config)||void 0===d?void 0:d.itemsPerPage)||0),this.totalPages=this.calculateTotalPages(),this.pages=this.getPages(this.page,this.totalPages),this.inited=!0}writeValue(e){this.page=e,this.pages=this.getPages(this.page,this.totalPages)}getText(e){return this[`${e}Text`]||this.config[`${e}Text`]}noPrevious(){return 1===this.page}noNext(){return this.page===this.totalPages}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}selectPage(e,n){n&&n.preventDefault(),this.disabled||(n&&n.target&&n.target.blur(),this.writeValue(e),this.onChange(this.page))}makePage(e,n,o){return{text:n,number:e,active:o}}getPages(e,n){const o=[];let s=1,r=n;const d=void 0!==this.maxSize&&this.maxSize<n;d&&this.maxSize&&(this.rotate?(s=Math.max(e-Math.floor(this.maxSize/2),1),r=s+this.maxSize-1,r>n&&(r=n,s=r-this.maxSize+1)):(s=(Math.ceil(e/this.maxSize)-1)*this.maxSize+1,r=Math.min(s+this.maxSize-1,n)));for(let g=s;g<=r;g++){const u=this.makePage(g,g.toString(),g===e);o.push(u)}if(d&&!this.rotate){if(s>1){const g=this.makePage(s-1,"...",!1);o.unshift(g)}if(r<n){const g=this.makePage(r+1,"...",!1);o.push(g)}}return o}calculateTotalPages(){const e=this.itemsPerPage<1?1:Math.ceil(this.totalItems/this.itemsPerPage);return Math.max(e||0,1)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(v),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["pagination"]],inputs:{align:"align",maxSize:"maxSize",boundaryLinks:"boundaryLinks",directionLinks:"directionLinks",firstText:"firstText",previousText:"previousText",nextText:"nextText",lastText:"lastText",rotate:"rotate",pageBtnClass:"pageBtnClass",disabled:"disabled",customPageTemplate:"customPageTemplate",customNextTemplate:"customNextTemplate",customPreviousTemplate:"customPreviousTemplate",customFirstTemplate:"customFirstTemplate",customLastTemplate:"customLastTemplate",itemsPerPage:"itemsPerPage",totalItems:"totalItems"},outputs:{numPages:"numPages",pageChanged:"pageChanged"},features:[t._Bn([tt])],decls:16,vars:6,consts:[[1,"pagination",3,"ngClass"],["class","pagination-first page-item",3,"disabled",4,"ngIf"],["class","pagination-prev page-item",3,"disabled",4,"ngIf"],["class","pagination-page page-item",3,"active","disabled",4,"ngFor","ngForOf"],["class","pagination-next page-item",3,"disabled",4,"ngIf"],["class","pagination-last page-item",3,"disabled",4,"ngIf"],["defaultPageTemplate",""],["defaultNextTemplate",""],["defaultPreviousTemplate",""],["defaultFirstTemplate",""],["defaultLastTemplate",""],[1,"pagination-first","page-item"],["href","",1,"page-link",3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"pagination-prev","page-item"],[1,"pagination-page","page-item"],[1,"pagination-next","page-item"],[1,"pagination-last","page-item"]],template:function(e,n){1&e&&(t.TgZ(0,"ul",0),t.YNc(1,D,3,7,"li",1),t.YNc(2,Y,3,7,"li",2),t.YNc(3,z,3,10,"li",3),t.YNc(4,B,3,7,"li",4),t.YNc(5,V,3,7,"li",5),t.qZA(),t.YNc(6,H,1,1,"ng-template",null,6,t.W1O),t.YNc(8,j,1,1,"ng-template",null,7,t.W1O),t.YNc(10,$,1,1,"ng-template",null,8,t.W1O),t.YNc(12,W,1,1,"ng-template",null,9,t.W1O),t.YNc(14,G,1,1,"ng-template",null,10,t.W1O)),2&e&&(t.Q6J("ngClass",n.classMap),t.xp6(1),t.Q6J("ngIf",n.boundaryLinks),t.xp6(1),t.Q6J("ngIf",n.directionLinks),t.xp6(1),t.Q6J("ngForOf",n.pages),t.xp6(1),t.Q6J("ngIf",n.directionLinks),t.xp6(1),t.Q6J("ngIf",n.boundaryLinks))},directives:[c.mk,c.O5,c.tP,c.sg],encapsulation:2}),i})(),et=(()=>{class i{static forRoot(){return{ngModule:i,providers:[]}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez]]}),i})();function nt(i,a){if(1&i&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e)}}function it(i,a){if(1&i&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e)}}function ot(i,a){1&i&&(t.TgZ(0,"p",19),t._uU(1," *Rating must be between 1 and 5. "),t.qZA())}let st=(()=>{class i{constructor(){this.onApplyEvent=new t.vpe}ngOnInit(){this.artistNg=this.SongArtist,this.categoryNg=this.SongCategoriesList.find(e=>e.name==this.SongCategoryName)}apply(){this.onApplyEvent.emit({favorite:this.SongFav,artist:this.artistNg,category:this.categoryNg,rating:this.SongRating})}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-filter"]],inputs:{SongCategoriesList:"SongCategoriesList",ArtistsList:"ArtistsList",SongArtist:"SongArtist",SongFav:"SongFav",SongCategoryName:"SongCategoryName",SongRating:"SongRating"},outputs:{onApplyEvent:"onApplyEvent"},decls:29,vars:8,consts:[[1,"mb-3"],[1,"d-flex","flex-row","align-items-baseline","mb-3"],["for","SongFav",1,"form-check-label","col-3","text-white"],["type","checkbox","name","SongFav","id","SongFav",1,"form-check-input","bg-dark",2,"border-color","white",3,"ngModel","ngModelChange"],["favV","ngModel"],["for","SongArtist",1,"form-label","col-3","text-white"],["required","","name","SongArtistId","id","SongArtistId",1,"form-control","bg-dark","text-white",3,"ngModel","ngModelChange"],["artistV","ngModel"],["class","text-white",3,"ngValue",4,"ngFor","ngForOf"],["for","SongCategory",1,"form-label","col-3","text-white"],["required","","name","SongCategory","id","SongCategory",1,"form-control","bg-dark","text-white",3,"ngModel","ngModelChange"],["CategoryV","ngModel"],["for","SongRating",1,"form-label","col-3","text-white"],["type","number","name","SongRating","id","SongRating","min","1","max","5",1,"form-control","bg-dark","text-white",3,"ngModel","ngModelChange"],["fRatingV","ngModel"],["class","text-danger",4,"ngIf"],[1,"d-flex","justify-content-center"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"text-white",3,"ngValue"],[1,"text-danger"]],template:function(e,n){if(1&e&&(t.TgZ(0,"form")(1,"div",0)(2,"div",1)(3,"label",2),t._uU(4,"Favorite"),t.qZA(),t.TgZ(5,"div")(6,"input",3,4),t.NdJ("ngModelChange",function(s){return n.SongFav=s}),t.qZA()()(),t.TgZ(8,"div",1)(9,"label",5),t._uU(10,"Artist"),t.qZA(),t.TgZ(11,"select",6,7),t.NdJ("ngModelChange",function(s){return n.artistNg=s}),t.YNc(13,nt,2,2,"option",8),t.qZA()(),t.TgZ(14,"div",1)(15,"label",9),t._uU(16,"Category"),t.qZA(),t.TgZ(17,"select",10,11),t.NdJ("ngModelChange",function(s){return n.categoryNg=s}),t.YNc(19,it,2,2,"option",8),t.qZA()(),t.TgZ(20,"div",1)(21,"label",12),t._uU(22,"Rating >="),t.qZA(),t.TgZ(23,"input",13,14),t.NdJ("ngModelChange",function(s){return n.SongRating=s}),t.qZA()(),t.YNc(25,ot,2,0,"p",15),t.TgZ(26,"div",16)(27,"button",17),t.NdJ("click",function(){return n.apply()}),t._uU(28," Apply "),t.qZA()()()()),2&e){const o=t.MAs(7),s=t.MAs(12),r=t.MAs(18),d=t.MAs(24);t.xp6(6),t.Q6J("ngModel",n.SongFav),t.xp6(5),t.Q6J("ngModel",n.artistNg),t.xp6(2),t.Q6J("ngForOf",n.ArtistsList),t.xp6(4),t.Q6J("ngModel",n.categoryNg),t.xp6(2),t.Q6J("ngForOf",n.SongCategoriesList),t.xp6(4),t.Q6J("ngModel",n.SongRating),t.xp6(2),t.Q6J("ngIf",d.invalid&&(d.dirty||d.touched)),t.xp6(2),t.Q6J("disabled",d.invalid||!(o.dirty||s.dirty||r.dirty||d.dirty))}},directives:[l._Y,l.JL,l.F,l.Wl,l.JJ,l.On,l.EJ,l.Q7,c.sg,l.YN,l.Kr,l.qQ,l.Fd,l.wV,l.Fj,c.O5],styles:[""]}),i})();function at(i,a){1&i&&(t.TgZ(0,"span",26),t.O4$(),t.TgZ(1,"svg",27),t._UZ(2,"path",28),t.qZA()())}function rt(i,a){if(1&i&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e.name.slice(0,47),"...")}}function gt(i,a){if(1&i&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.name)}}function lt(i,a){if(1&i&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e.artist.slice(0,47),"...")}}function dt(i,a){if(1&i&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.artist)}}function ct(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t.YNc(2,at,3,0,"span",16),t.qZA(),t.YNc(3,rt,2,1,"td",17),t.YNc(4,gt,2,1,"td",17),t.YNc(5,lt,2,1,"td",17),t.YNc(6,dt,2,1,"td",17),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",18),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw(),d=t.MAs(31);return r.editModal(d,s)}),t.O4$(),t.TgZ(13,"svg",19),t._UZ(14,"path",20)(15,"path",21),t.qZA()(),t.kcU(),t.TgZ(16,"button",22),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().deleteSong(s.id)}),t.O4$(),t.TgZ(17,"svg",23),t._UZ(18,"path",24)(19,"path",25),t.qZA()()()()}if(2&i){const e=a.$implicit;t.xp6(2),t.Q6J("ngIf",e.favorite),t.xp6(1),t.Q6J("ngIf",e.name.length>50),t.xp6(1),t.Q6J("ngIf",e.name.length<=50),t.xp6(1),t.Q6J("ngIf",e.artist.length>50),t.xp6(1),t.Q6J("ngIf",e.artist.length<=50),t.xp6(2),t.Oqu(e.songCategory),t.xp6(2),t.Oqu(e.rating)}}function pt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",29)(1,"pagination",30),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().pagination.CurrentPage=o})("pageChanged",function(o){return t.CHM(e),t.oxw().pageChanged(o)}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("boundaryLinks",!0)("totalItems",e.pagination.TotalCount)("itemsPerPage",e.pagination.PageSize)("ngModel",e.pagination.CurrentPage)}}function ut(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"app-add-edit-song",37),t.NdJ("openedEvent",function(o){return t.CHM(e),t.oxw(2).closeEditModal(o)}),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("SongCategoriesList",e.SongCategoriesList)("childComponentAdd",e.childComponentAdd)("SelectedSong",e.SelectedSong)}}function ht(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",31)(1,"h4",32),t._uU(2,"Edit Song"),t.qZA(),t.TgZ(3,"button",33),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return null==o.modalRef?null:o.modalRef.hide()}),t.TgZ(4,"span",34),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",35),t.YNc(7,ut,1,3,"app-add-edit-song",36),t.qZA()}if(2&i){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",!0===e.childComponentOpen)}}function mt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"app-filter",39),t.NdJ("onApplyEvent",function(o){return t.CHM(e),t.oxw(2).closeFilterModal(o)}),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("SongCategoriesList",e.SongCategoriesList)("ArtistsList",e.ArtistsList)("SongFav",e.favorite)("SongArtist",e.artist)("SongCategoryName",e.category)("SongRating",e.rating)}}function _t(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",31)(1,"h4",32),t._uU(2,"Add Filters"),t.qZA(),t.TgZ(3,"button",33),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return null==o.modalRef2?null:o.modalRef2.hide()}),t.TgZ(4,"span",34),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",35),t.YNc(7,mt,1,6,"app-filter",38),t.qZA()}if(2&i){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",!0===e.childComponentOpen2)}}const ft=[{path:"add-song",component:b},{path:"",component:(()=>{class i{constructor(e,n,o){this.service=e,this.modalService=n,this.toastrService=o,this.favorite=!1,this.rating=1,this.childComponentOpen=!1,this.childComponentOpen2=!1,this.childComponentAdd=!0}ngOnInit(){this.loadSongs(),this.loadArtists(),this.loadCategories()}ngOnDestroy(){this.sub.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe()}loadSongs(){this.sub=this.service.getSongsList(this.pageNumber,this.searchString,this.favorite,this.artist,this.category,this.rating).subscribe(e=>{this.SongsList=e.result,e.pagination&&(this.pagination=e.pagination)})}loadArtists(){this.sub2=this.service.getArtistsList().subscribe(e=>{this.ArtistsList=e,console.log(this.ArtistsList)})}loadCategories(){this.sub3=this.service.getSongCategoriesList().subscribe(e=>{this.SongCategoriesList=e})}refreshSongsAndArtists(){this.sub.unsubscribe(),this.sub2.unsubscribe(),this.loadSongs(),this.loadArtists()}pageChanged(e){this.pageNumber=e.page,console.log(this.pageNumber),this.loadSongs()}editModal(e,n){this.childComponentAdd=!1,this.SelectedSong=n,this.childComponentOpen=!0,this.modalRef=this.modalService.show(e)}filterModal(e){this.childComponentOpen2=!0,this.modalRef2=this.modalService.show(e)}deleteSong(e){confirm("Are you sure that you want to delete song?")&&(this.sub.unsubscribe(),this.sub=this.service.deleteSong(e).subscribe({next:n=>{this.toastrService.success("Song Deleted Successfully!"),this.refreshSongsAndArtists()},error:n=>{this.toastrService.error(n.error)}}))}closeEditModal(e){var n;this.childComponentOpen=!1,null===(n=this.modalRef)||void 0===n||n.hide(),this.refreshSongsAndArtists()}closeFilterModal(e){var n;this.childComponentOpen2=!1,null===(n=this.modalRef2)||void 0===n||n.hide(),this.favorite=e.favorite,this.artist=e.artist,e.category&&(this.category=e.category),this.rating=e.rating,this.search()}clearFilters(){this.searchString=null,this.favorite=!1,this.artist=null,this.category=null,this.rating=1,this.search()}search(){this.sub.unsubscribe(),this.loadSongs()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C),t.Y36(U.tT),t.Y36(x._W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],decls:34,vars:4,consts:[["id","glavni",1,"bg-dark","bg-gradient"],[1,"container",2,"padding-top","150px"],[1,"row"],[1,"col-6"],[1,"col-8"],["type","text","placeholder","Song Name","aria-label","Song Name","aria-describedby","button-addon2","maxlength","200",1,"form-control","bg-dark","text-white",3,"ngModel","ngModelChange"],["searchV","ngModel"],["type","button","id","button-addon2","type","button",1,"btn","btn-outline-primary","col-4",3,"disabled","click"],["type","button","id","button-addon3",1,"btn","btn-outline-primary","me-1",3,"click"],["type","button","id","button-addon4",1,"btn","btn-outline-primary",3,"click"],[1,"table-responsive"],[1,"table","table-striped","mt-3","table-dark"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],["template2",""],["template3",""],["class","text-primary",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-outline-primary","me-2","mb-1",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-pencil-square"],["d","M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"],["fill-rule","evenodd","d","M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"],[1,"btn","btn-outline-danger","me-2","mb-1",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"],["fill-rule","evenodd","d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"],[1,"text-primary"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-star-fill"],["d","M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"],[1,"d-flex","justify-content-center"],["id","s55","previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","ngModel","ngModelChange","pageChanged"],[1,"modal-header","bg-dark"],[1,"modal-title","text-white"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body","bg-dark"],[3,"SongCategoriesList","childComponentAdd","SelectedSong","openedEvent",4,"ngIf"],[3,"SongCategoriesList","childComponentAdd","SelectedSong","openedEvent"],[3,"SongCategoriesList","ArtistsList","SongFav","SongArtist","SongCategoryName","SongRating","onApplyEvent",4,"ngIf"],[3,"SongCategoriesList","ArtistsList","SongFav","SongArtist","SongCategoryName","SongRating","onApplyEvent"]],template:function(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"div",3),t.TgZ(4,"div",3)(5,"div",2)(6,"div",4)(7,"input",5,6),t.NdJ("ngModelChange",function(r){return n.searchString=r}),t.qZA()(),t.TgZ(9,"button",7),t.NdJ("click",function(){return n.search()}),t._uU(10,"Search"),t.qZA()()()(),t.TgZ(11,"button",8),t.NdJ("click",function(){t.CHM(o);const r=t.MAs(33);return n.filterModal(r)}),t._uU(12,"Filters"),t.qZA(),t.TgZ(13,"button",9),t.NdJ("click",function(){return n.clearFilters()}),t._uU(14,"Restore Defaults"),t.qZA(),t.TgZ(15,"div",10)(16,"table",11)(17,"thead"),t._UZ(18,"th"),t.TgZ(19,"th"),t._uU(20,"Name"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Artist"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Category"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Rating"),t.qZA()(),t.TgZ(27,"tbody"),t.YNc(28,ct,20,7,"tr",12),t.qZA()()(),t.YNc(29,pt,2,4,"div",13),t.YNc(30,ht,8,1,"ng-template",null,14,t.W1O),t.YNc(32,_t,8,1,"ng-template",null,15,t.W1O),t.qZA()()}if(2&e){const o=t.MAs(8);t.xp6(7),t.Q6J("ngModel",n.searchString),t.xp6(2),t.Q6J("disabled",!o.dirty),t.xp6(19),t.Q6J("ngForOf",n.SongsList),t.xp6(1),t.Q6J("ngIf",null!=n.pagination)}},directives:[l.Fj,l.nD,l.JJ,l.On,c.sg,c.O5,S,b,st],styles:["#glavni[_ngcontent-%COMP%]{min-height:calc(100vh - 56px)}"]}),i})()}];let Ct=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[_.Bz.forChild(ft)],_.Bz]}),i})(),xt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,Ct,et.forRoot(),l.u5]]}),i})()}}]);