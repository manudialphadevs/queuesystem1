import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public notify = new BehaviorSubject<any>('');
  eventEmitterNotifier: EventEmitter<null> = new EventEmitter();
  notifyObservable$ = this.notify.asObservable();
 
  constructor() { }
  public notifyOther(data: any) {
    if (data) {
        this.notify.next(data);
    }
}
}
 