import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { PopupComponent } from './popup/popup.component';
import { SharedserviceService } from './sharedservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'counter';
  count=0;
  constructor(private dialogRef : MatDialog,private sharedservice:SharedserviceService){}
  ngOnInit(): void {
    this.sharedservice.count$.subscribe(newCount => {
      this.count = newCount;
    });
  }
  increment(){
    if(this.count==5){
      this.dialogRef.open(PopupComponent)
    }
    else{
    this.count+=1
    }
  }
  decrement(){
    if(this.count==-5){
      this.dialogRef.open(PopupComponent)
    }
    else{
    this.count-=1
    }
  }
}
