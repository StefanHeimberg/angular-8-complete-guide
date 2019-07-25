import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a Test 1', 'https://www.aspicyperspective.com/wp-content/uploads/2011/03/clams-casino-8-256x256.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a Test 2', 'https://www.aspicyperspective.com/wp-content/uploads/2011/03/clams-casino-8-256x256.jpg')
  ];

  @Output()
  recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
