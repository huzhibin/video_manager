import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Video } from '../model/Video';

@Injectable()
export class VideoService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private videoUrl = 'api/heroes';  // URL to web api
  constructor(private http: Http) { }

  getVideoList(params): Promise<Object> {
    return this.http.post('http://192.168.1.26:8080/manage/video/getVideoList.do', JSON.stringify(params))
               .toPromise()
               .then(response => response.json() as data)
               .catch(this.handleError);
  }
  // update(hero: Hero): Promise<Hero> {
  //   const url = `${this.videoUrl}/${hero.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(hero), {headers: this.headers})
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }
  // create(name: string): Promise<Hero> {
  //   return this.http
  //     .post(this.videoUrl, JSON.stringify({name: name}), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json().data as Hero)
  //     .catch(this.handleError);
  // }
  // delete(id: number): Promise<void> {
  //   const url = `${this.videoUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
