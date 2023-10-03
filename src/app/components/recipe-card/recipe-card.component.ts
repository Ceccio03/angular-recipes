import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from 'src/app/model/recipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CategoryToStringPipe } from "src/app/pipes/category-to-string.pipe";
import { HighlightDirective } from 'src/app/directives/highlight.directive';

@Component({
    selector: 'app-recipe-card',
    standalone: true,
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss'],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        RouterModule,
        CategoryToStringPipe,
        HighlightDirective
    ]
})
export class RecipeCardComponent {
  @Input() recipe?: Recipe;

  bColor = 'yellow';
  color = 'black'
}