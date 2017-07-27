import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { VideoModalComponent }  from './video-modal/video-modal.component';
import { PaginationComponent }  from './pagination/pagination.component';
import { NgbdModalBasic }  from './modal-basic';
import { VideoService }  from './service/video.service';

@NgModule({
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    VideoModalComponent,
    PaginationComponent,
    NgbdModalBasic,
  ],
  providers: [
    VideoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
