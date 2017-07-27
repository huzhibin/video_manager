import { Component, OnInit } from '@angular/core';

import { Video } from './model/video';
import { ResData } from './model/resData';
import { VideoService } from './service/video.service';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`],
})

export class AppComponent implements OnInit {
  totalPage: number = 1;
  videoList: Video[];
  selectVideo: any;
  pageSize: number = 10;
  pageNumber: number = 1;
  tags: Array<Object>;
  isVideoModalFade: boolean = true;
  videoModalType: string = "";

  constructor(
    private videoService: VideoService,
    // private router: Router
  ) { };

  ngOnInit(): void {
    this.selectVideo = {
      title: "sa",
      detail: "1",
      typeid: 1,
      upload_file: undefined
    };
    // this.videoList = new Array(this.selectVideo);
    this.getVideoList();
    this.getAllTpye();
  }
  sortByCreateTime() {
    console.log(this.videoList);
    for(let i=0;i< this.videoList.length;i++){
      for(let j=i;j< this.videoList.length;j++){
        if(this.videoList[i].createTime>this.videoList[j].createTime){
          let temp = this.videoList[j];
          this.videoList[j]=this.videoList[i];
          this.videoList[i]=temp;
        }
      }
    }
    return this.videoList;
  }
  reverseList(){
    this.videoList = this.videoList.reverse();
    let temp = new Array();
    for(let j=0;j< this.videoList.length;j++){
      temp.push(this.videoList[j]);
    }
    this.videoList = temp;
  }
  getVideoList(): void {
    let params = { pageSize: this.pageSize, pageNumber: this.pageNumber };
    this.videoService.getVideoList(params)
      .then((data: ResData) => {
        if (data.status == 0) {
          this.videoList = data.data.list;
          this.totalPage = data.data.pages;
          this.sortByCreateTime();
        } else {
          alert(data.msg);
        }
      });
  }
  getAllTpye(): void {
    this.videoService.getAllTpye()
      .then((data: ResData) => {
        this.tags = data.data;
      });
  }
  uploadVideo(title: string, detail: string, type: number, upload_file: any) {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('detail', detail);
    formData.append('typeid', type);
    formData.append('upload_file', upload_file);

    this.videoService.uploadVideoRecord(formData)
      .then((data: ResData) => {
        if (data.status == 0) {
          alert('上传成功');
          this.getVideoList();
          this.hideVideoModal();
        } else {
          alert(data.msg);
        }
      });
  }
  editVideo(id: number, title: string, detail: string, type: number, upload_file: any) {
    console.log(arguments);
    let formData = new FormData();
    formData.append('id', id);
    formData.append('title', title);
    formData.append('detail', detail);
    formData.append('typeid', type);
    formData.append('upload_file', upload_file || new File([], ''));

    this.videoService.updateVideo(formData)
      .then((data: ResData) => {
        if (data.status == 0) {
          alert('更新成功');
          this.getVideoList();
          this.hideVideoModal();
        } else {
          alert(data.msg);
        }
      });
  }
  deleteVideo(video: any) {
    if (confirm(`
      确认删除该视频？\n
      ${video.title}
      `) && video.id) {

      this.videoService.deleteVideo({ id: video.id })
        .then((data: ResData) => {
          if (data.status == 0) {
            alert('删除成功');
            this.getVideoList();
          } else {
            alert(data.msg);
          }
        });
    }
  }

  updatePageNumber(event: number) {
    this.pageNumber = event;
    this.getVideoList();
  }
  showVideoModal(type: string, item: any) {
    this.isVideoModalFade = false;
    this.videoModalType = type || "";
    this.selectVideo = item || this.selectVideo;

  }
  hideVideoModal() {
    this.isVideoModalFade = true;
  }
  saveVideoModal(event: any) {
    if (event.type == "upload") {
      this.uploadVideo(
        event.video.title,
        event.video.detail,
        parseInt(event.video.typeid),
        event.video.upload_file,
      );
    } else if (event.type == "edit") {
      this.editVideo(
        parseInt(event.video.id),
        event.video.title,
        event.video.detail,
        parseInt(event.video.typeid),
        event.video.upload_file,
      );
    } else {
      console.log('未处理的模态框类型');
      return;
    }
  }
}
