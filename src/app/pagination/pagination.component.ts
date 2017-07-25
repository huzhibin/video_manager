import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: `./pagination.component.html`,
  styleUrls: [`./pagination.component.css`],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalPage: number;
  @Input() pageNumber: number;
  @Output() updatePageNumber: EventEmitter<number> = new EventEmitter<number>();
  pages: Array;

  constructor() {
  };

  ngOnInit(): void {
  }

  //监测父组件中totalPage改变
  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalPage'] && changes['totalPage'].currentValue) {
      this.totalPage = changes['totalPage'].currentValue;
      this.pages = new Array(changes['totalPage'].currentValue);
    }
  }

  selectPage(pageNumber) {
    if(this.pageNumber != pageNumber){
      this.pageNumber = pageNumber;
      this.updatePageNumber.emit(pageNumber);
    }
  }
  increasePage() {
    if (this.pageNumber < this.totalPage) {
      this.updatePageNumber.emit(++this.pageNumber);
    }
  }
  decreasePage() {
    if (this.pageNumber > 1) {
      this.updatePageNumber.emit(--this.pageNumber);
    }
  }

}
