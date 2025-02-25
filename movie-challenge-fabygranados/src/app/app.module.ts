import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    HttpClientModule,
    NgbModule, MatButtonModule, NgIf, FooterComponent
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
