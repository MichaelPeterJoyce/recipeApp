import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.modal';
import {Ingredient} from '../shared/ingredient.modal';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Greek Pizza',
      'Delicious easy greek pizza',
      'http://slapdashmom.com/wp-content/uploads/2013/02/greekpizza.jpeg',
      [
        new Ingredient('Cheese', 2),
        new Ingredient('Meat', 2),
        new Ingredient('Tomato', 2),
      ]
    )
  ];

  getRecipes() {
    // copy array to component
    return this.recipes.slice();
  }


}


