import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { SharedserviceService } from '../sharedservice.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  constructor(private dialogRef : MatDialog,private sharedservice:SharedserviceService){}
  reset(){
    this.sharedservice.updateCount(0);
    this.dialogRef.closeAll();
  }
  cancel(){
    this.dialogRef.closeAll();
  }

}
