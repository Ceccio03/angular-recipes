import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DishType } from 'src/app/model/recipe';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedCategory: string = '-1';

  @Output() catChanged = new EventEmitter<number>();

  categories = Object.entries(DishType).slice(Object.entries(DishType).length/2);

  constructor(private commService: CommunicationService) {}

  toggleTheme() {
    document.body.classList.toggle('pippo-dark');
  }

  categoryChanged() {
    const categoryNumber = parseInt(this.selectedCategory);
    this.commService.changeCategory(categoryNumber);
  }
}