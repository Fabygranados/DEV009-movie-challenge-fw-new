import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Movie, Results } from '../models';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor( private http: HttpClient) { }
  private url = 'https://api.themoviedb.org/3';
  private apiKey = '864c45bb0c62da46a41a48210b91d1ab';
  
  getDataDiscover(page: number): Observable<Results> {
     //nose si esto sea necesario
    return this.http.get<Results>(`${this.url}/discover/tv?api_key=${this.apiKey}&include_adult=false&include_null_first_air_dates=false&page=${page}&timezone=KR&watch_region=KR&language=ko`);
  }
  thisYearTVList(byyear: string): Observable<Results>{
    return this.http.get<Results>(`${this.url}/discover/tv?api_key=${this.apiKey}&include_adult=false&include_null_first_air_dates=false&page=1&timezone=KR&watch_region=KR&first_air_date_year=${byyear}`);
  
  }
}
