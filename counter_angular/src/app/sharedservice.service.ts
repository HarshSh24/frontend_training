import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  private countSource = new Subject<number>();
  count$ = this.countSource.asObservable();
  public count = 0;

  updateCount(newCount: number) {
    this.count = newCount;
    this.countSource.next(this.count);
  }
}
