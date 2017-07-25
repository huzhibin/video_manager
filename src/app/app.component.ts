import { Component, OnInit } from '@angular/core';

import { Video } from './model/video';
import { VideoService } from './service/video.service';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})

export class AppComponent implements OnInit {
  totalPage: number = 1;
  videoList: Video[];
  selectVideo: Video;
  const pageSize: number = 10;
  pageNumber: number = 1;

  constructor(
    private videoService: VideoService,
    // private router: Router
  ) { };

  ngOnInit(): void {
    // this.selectVideo=new Video();
    this.getVideoList();
  }

  getVideoList(params): void {
    params = { pageSize: this.pageSize, pageNumber: this.pageNumber };
    this.videoService.getVideoList(params)
      .then(data => {
        console.log(data);
        this.videoList = data.data.list;
        this.totalPage = data.data.pages;
      });
  }

  updatePageNumber(event) {
    this.pageNumber = event;
    this.getVideoList();
  }
}
