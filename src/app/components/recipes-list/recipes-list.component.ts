import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/service/data.service';
import { Recipe } from 'src/app/model/recipe';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    RecipeCardComponent,
    MatGridListModule
  ],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private dataServ: DataService) {}

  ngOnInit(): void {
    this.dataServ.getAllRecipes().subscribe(recs => this.recipes = recs);
  }
}