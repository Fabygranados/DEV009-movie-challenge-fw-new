import { NgModule } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MovieTableComponent } from 'src/app/components';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    HomeComponent, 
    MovieTableComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatPaginatorModule,
    MatChipsModule,
    MatFormFieldModule,
    NgFor,
    NgIf,
    MatCardModule, 
    MatButtonModule,
    MatIconModule
  ]
})
export class HomeModule { }
