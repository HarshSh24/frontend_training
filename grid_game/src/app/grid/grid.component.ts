import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnChanges{
  @Input() row:number;
  @Input() col:number;
  @Input() total_rows:number;
  @Input() total_columns:number;
  @Output() new_row = new EventEmitter<number>();
  @Output() new_col = new EventEmitter<number>();
  rows:number[]=[];
  columns:number[]=[];

  ngOnInit(){
    if(this.row>this.total_rows-1 || this.col>this.total_columns-1){
      this.new_row.emit(0);
      this.new_col.emit(0);
    }
    this.rows=[];
    this.columns=[];
    for(let j=0;j<this.total_rows;j++){
      this.rows.push(j);
    }
    for(let j=0;j<this.total_columns;j++){
      this.columns.push(j);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

}
