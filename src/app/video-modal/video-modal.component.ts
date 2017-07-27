import 'rxjs/add/operator/switchMap';
import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent implements OnInit {
  // @Input() open: boolean;
  @Input() type: string;
  @Input() video: any;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }


  ngOnInit(): void {
  }

  submit(): void {
    this.save.emit({ video: this.video, type: this.type })
  }

  fileChange(event: any) {
    this.video.upload_file = event.target.files[0] || null;
  }
}
