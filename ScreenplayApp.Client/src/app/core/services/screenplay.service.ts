import { Screenplay } from './../../shared/models/Screenplay.model';
import { Category } from './../../shared/models/Category.model';
import { Observable, Subject } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class ScreenplayService {

  private screenplays: Screenplay[] = [];
  private screenplaysUpdated =  new Subject<{screenplays: Screenplay[], maxScreenplays: number}>();
  private page:number = 1;
  private selectedCategoryId: string = '';
  private shouldCleanFlag!: boolean;

  constructor(private http: HttpClient) { }

  getContentUpdateLstener() {
    return this.screenplaysUpdated.asObservable();
  }

  getScreenplays(categoryId: string, reset: boolean = false, searchTerm: string = ''){

    //If it is the same category --> load more
    //Else --> clear data and make request
    if(this.selectedCategoryId != categoryId || reset){
      this.shouldCleanFlag = true;
      this.page = 1;
    } else {
      this.shouldCleanFlag = false;
      ++this.page;
    }

    this.selectedCategoryId = categoryId;
    const queryParams = `?page=${this.page}&category=${this.selectedCategoryId}&search=${searchTerm}`;

    this.http.get<any>(BASE_URL +'screenplays' + queryParams)
    .pipe(map(data => {
      return { screenplays: data.map((screenplay:any) => {
        return {
          _id: screenplay._id,
          title: screenplay.title,
          description: screenplay.description,
          photoUrl: screenplay.photoUrl,
          releaseDate: screenplay.releaseDate,
          casting: screenplay.casting,
          category: screenplay.category,
          rate: screenplay.rate,
          votes: screenplay.votes
        };
      })}
      }))
      .subscribe((transformedScreenplays : any) => {
          //If it is the same category concat array
          //Else clear it and add new data
          this.shouldCleanFlag ?
          this.screenplays = transformedScreenplays.screenplays :
          this.screenplays = this.screenplays.concat(transformedScreenplays.screenplays);
          this.screenplaysUpdated.next({ screenplays: [...this.screenplays], maxScreenplays: transformedScreenplays.maxScreenplays});
    });
  }

  getScreenplayById(id:string): Observable<Screenplay>  {
    return this.http.get<Screenplay>(BASE_URL + 'screenplays/' + id)
  }

  rateScreenplay(id:number, rate: number){
    const data = {
      rate: rate
    }
    this.http.put(BASE_URL + 'screenplays/' + id, data).subscribe(res =>
      console.log(res)
    )
  }

  getCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(BASE_URL + 'categories')
  }
}
