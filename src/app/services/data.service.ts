import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../model/recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  recipes = new BehaviorSubject<Recipe[]>([]);
  allRecipes: Recipe[] = [];
  readonly DB_URL = "https://651a7ab0340309952f0d5a70.mockapi.io/recipe";

  constructor(private http: HttpClient) {
    this.getAllRecipes();
  }

  // getAllRecipes(): Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(this.DB_URL);
  // }

  getAllRecipes(): void {
    this.http.get<Recipe[]>(this.DB_URL).subscribe(recs => {
      this.recipes.next(recs);
      this.allRecipes = recs;
    });
  }
  
  filterRecipes(category: number) {
    if (category === 1) {
      this.recipes.next(this.allRecipes);
    } else {
      const filteredRecipes = this.allRecipes.filter((recipe) => recipe.category === category);
      this.recipes.next(filteredRecipes);
    }
  }

  getRecipe(recipeId: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.DB_URL + '/' + recipeId);
  }

  postRecipe(newRecipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.DB_URL, newRecipe, {headers: {'content-type': 'application/json'}});
  }

  deleteRecipe(recipeId: string) {
    return this.http.delete<Recipe>(this.DB_URL + '/' + recipeId);
  }
}