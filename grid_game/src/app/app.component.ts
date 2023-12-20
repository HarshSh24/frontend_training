import { Component } from '@angular/core';
import { AfterViewInit,Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  row=0;
  col=0;
  id="";
  title = 'grid_game';
  constructor(@Inject(DOCUMENT) private document: Document){}

  ngAfterViewInit(): void {
    this.id=this.row.toString()+"_"+this.col.toString();
    this.document.getElementById(this.id)?.setAttribute("style","background:red");
  }
  recolor(row:number,col:number){
    this.id=row.toString()+"_"+col.toString();
    this.document.getElementById(this.id)?.setAttribute("style","background:white");
  }
  check(){
    if(this.col>5 || this.row>5 || this.row<0 || this.col<0) return false
    return true
  }
  moveUp(){
    this.row-=1;
    if(!this.check()) {
      this.row+=1;
      alert("This move is not allowed");
    }
    else{
      this.recolor(this.row+1,this.col);
      this.ngAfterViewInit();
    }
  }
  moveDown(){
    this.row+=1;
    if(!this.check()) {
      this.row-=1;
      alert("This move is not allowed");
    }
    else{
      this.recolor(this.row-1,this.col);
      this.ngAfterViewInit();
    }
  }
  moveLeft(){
    this.col-=1;
    if(!this.check()) {
      this.col+=1
      alert("This move is not allowed");
    }
    else{
      this.recolor(this.row,this.col+1);
      this.ngAfterViewInit();
    }
    
  }
  moveRight(){
    this.col+=1;
    if(!this.check()) {
      this.col-=1;
      alert("This move is not allowed");
    }
    else{
      this.recolor(this.row,this.col-1);
      this.ngAfterViewInit();
    }
  }
}
