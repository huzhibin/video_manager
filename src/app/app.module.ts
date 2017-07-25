import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { VideoModalComponent }  from './video-modal/video-modal.component';
import { PaginationComponent }  from './pagination/pagination.component';
import { VideoService }  from './service/video.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    VideoModalComponent,
    PaginationComponent,
  ],
  providers: [
    VideoService
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
