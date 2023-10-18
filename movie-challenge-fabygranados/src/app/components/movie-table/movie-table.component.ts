import { Component, Input, OnInit } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { Movie, Results } from 'src/app/models/movies.model';


@Component({
  selector: 'app-movie-table',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit {
  @Input() movies: Movie[] | any;
  perPage = 5;
  currentPage = 1;
  

  constructor(private apiService: ApiService) {
  
  }
  ngOnInit(): void{
    this.getDataDiscover();
  }
  public getDataDiscover(): void{
      this.apiService.getDataDiscover(this.currentPage).subscribe((data: Results) => {
        this.movies = data.results;
        console.log(data.results);

  });
}
}
