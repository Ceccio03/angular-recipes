import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-recipes';
  category = -1;

  categoryChange(cat: number) {
    this.category = cat;
  }
}