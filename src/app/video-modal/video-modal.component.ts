import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Video } from '../model/video';

@Component({
  selector: 'video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent implements OnInit {
  @Input() video: Video;
  get str() { return JSON.stringify(this.video) };
  constructor(
    // private heroService: HeroService,
    // private route: ActivatedRoute,
    // private location: Location
  ) { }

  ngOnInit(): void {
    // this.route.params
    //   .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    //   .subscribe(hero => this.hero = hero);
  }

  submit(): void {
    // this.heroService.update(this.hero)
    //   .then(() => this.goBack());
  }

}
