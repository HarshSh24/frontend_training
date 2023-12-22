import { Component} from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  row=0;
  col=0;
  total_rows:number=5;
  total_columns:number=5;
  rows:number[]=[];
  columns:number[]=[];
  id="";
  title = 'grid_game';

  ngOnInit(){
    for(let j=0;j<this.total_rows;j++){
      this.rows.push(j);
    }
    for(let j=0;j<this.total_columns;j++){
      this.columns.push(j);
    }
  }

  changeGrid(event:KeyboardEvent){
    if(event.shiftKey){
      if(this.total_rows!=10 && event.key==='ArrowDown')
      this.total_rows+=1;
      else if(this.total_rows!=2 && event.key==='ArrowUp')
      this.total_rows-=1;
      else if(this.total_columns!=10 && event.key==='ArrowRight')
      this.total_columns+=1;
      else if(this.total_columns!=2 && event.key==='ArrowLeft')
      this.total_columns-=1;
    }
  }

  increaseRows(event: KeyboardEvent){
    if(this.total_rows!=10 && event.key==='ArrowDown')
    this.total_rows+=1
  }
 decreaseRows(event: KeyboardEvent){
    if(this.total_rows!=2 && event.key==='ArrowUp')
    this.total_rows-=1
  }
  increaseColumns(event: KeyboardEvent){
    if(this.total_columns!=10 && event.key==='ArrowRight')
    this.total_columns+=1
  }
 decreaseColumns(event: KeyboardEvent){
    if(this.total_columns!=2 && event.key==='ArrowLeft')
    this.total_columns-=1
  }

  check(){
    if(this.col>this.total_columns-1 || this.row>this.total_rows-1 || this.row<0 || this.col<0) return false
    return true
  }
  moveUp(){
    this.row-=1;
    if(!this.check()) {
      this.row+=1;
      alert("This move is not allowed");
    }
  }
  moveDown(){
    this.row+=1;
    if(!this.check()) {
      this.row-=1;
      alert("This move is not allowed");
    }
  }
  moveLeft(){
    this.col-=1;
    if(!this.check()) {
      this.col+=1
      alert("This move is not allowed");
    }
    
  }
  moveRight(){
    this.col+=1;
    if(!this.check()) {
      this.col-=1;
      alert("This move is not allowed");
    }
  }
  updateRow(new_row: number) {
    this.row=new_row;
  }

  updateCol(new_col: number) {
    this.col=new_col;
  }
}
