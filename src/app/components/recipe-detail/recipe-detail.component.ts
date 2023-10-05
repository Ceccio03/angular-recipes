import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { CategoryToStringPipe } from "../../pipes/category-to-string.pipe";
import { ToHumanDatePipe } from "../../pipes/to-human-date.pipe";
import { MatButtonModule } from '@angular/material/button';
import { SuperButtonModule } from '../super-button/super-button.module';
import { SuperButtonDirective } from 'src/app/directives/super-button.directive';

@Component({
    selector: 'app-recipes-detail',
    standalone: true,
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss'],
    imports: [
      CommonModule,
      CategoryToStringPipe,
      ToHumanDatePipe,
      MatButtonModule,
      SuperButtonModule,
      SuperButtonDirective
    ]
})
export class RecipesDetailComponent implements OnInit {
  recipe?: Recipe;

  constructor(private dataServ: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.dataServ.getRecipe(id).subscribe(recData => this.recipe = recData);
    }
  }

  deleteRecipe() {
    if (this.recipe && this.recipe.id) {
      this.dataServ.deleteRecipe(this.recipe.id).subscribe(resp => {
        console.log('cancellata')
      });
    }
  }
}