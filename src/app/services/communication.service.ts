import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  selectedCategory = new BehaviorSubject<number>(-1);
  constructor() { }

  changeCategory(newValue: number) {
    this.selectedCategory.next(newValue)
  }
}