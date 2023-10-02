import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/service/data.service';
import { Recipe } from 'src/app/model/recipe';
import { Router } from '@angular/router';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    RecipeCardComponent
  ],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private dataServ: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataServ.getAllRecipes().subscribe(rec => this.recipes = rec);
  }

  openDetail(recipe: Recipe){
    this.router.navigateByUrl('/recipe/' + recipe.description)
  }
}
