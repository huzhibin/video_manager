import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { HttpRequest } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Video } from '../model/Video';
import { ResData } from '../model/resData';

@Injectable()
export class VideoService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private host = 'http://192.168.1.26:8080';
  private path = 'manage/video';
  constructor(private http: Http) { }

  getVideoList(params: Object): Promise<Object> {
    return this.http.post(`${this.host}/${this.path}/getVideoList.do`, JSON.stringify(params))
      .toPromise()
      .then(response => response.json() as ResData)
      .catch(this.handleError);
  }

  getAllTpye(): Promise<Object> {
    return this.http.get(`${this.host}/${this.path}/getAllTpye.do`)
      .toPromise()
      .then((response: any) => response.json() as ResData)
      .catch(this.handleError);
  }

  updateVideo(formData: any): Promise<any> {
    return this.http
      .post(`${this.host}/${this.path}/updateVideo.do`,
        formData,
        new RequestOptions({ headers: new Headers() }))
      .toPromise()
      .then((response: any) => response.json() as ResData)
      .catch(this.handleError);
  }

  uploadVideoRecord(formData: any): Promise<any> {
    return this.http
      .post(`${this.host}/${this.path}/uploadVideoRecord.do`,
      formData,
      new RequestOptions({ headers: new Headers() }))
      .toPromise()
      .then((response: any) => response.json() as ResData)
      .catch(this.handleError);
  }
  //上传文件进度监测
  // uploadVideoProgress(formData: any): Promise<any> {
  //   console.log(new RequestOptions());
  //   return this.http
  //     .post(new HttpRequest(
  //       'POST',
  //       URL,
  //       body,
  //       {
  //         reportProgress: true
  //       })
  //     )
  //     .subscribe(event => {
  //       if (event.type === HttpEventType.DownloadProgress) {
  //
  //       }
  //
  //       if (event.type === HttpEventType.UploadProgress) {
  //
  //       }
  //
  //       if (event.type === HttpEventType.Response) {
  //         console.log(event.body);
  //       }
  //     })
  //     .catch(this.handleError);
  // }

  deleteVideo(params: any): Promise<any> {
    return this.http
      .get(`${this.host}/${this.path}/deleteVideo.do?id=${params.id}`)
      .toPromise()
      .then((response: any) => response.json() as ResData)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
