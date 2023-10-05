import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Recipe } from 'src/app/model/recipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipes-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipesAddComponent {
  newRecipe: Recipe = {
    name:'',
    createdAt: 0,
    ingredients: [],
    description: '',
    category: 0,
    url: ''
  };

  constructor(private dataServ: DataService) {}

  submitRecipe() {
    console.log(this.newRecipe);
    this.dataServ.postRecipe(this.newRecipe).subscribe(addedRecipe => console.log(addedRecipe));
  }
}