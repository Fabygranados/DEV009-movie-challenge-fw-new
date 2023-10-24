import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MovieTableComponent } from 'src/app/components';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgFor } from '@angular/common';




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
    NgFor
  ]
})
export class HomeModule { }
