import {Injectable} from '@angular/core';
import {Recipe} from './recipe.modal';
import {Ingredient} from '../shared/ingredient.modal';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Greek Pizza',
      'Delicious easy greek pizza',
      'http://slapdashmom.com/wp-content/uploads/2013/02/greekpizza.jpeg',
      [
        new Ingredient('Cheese', 2),
        new Ingredient('Meat', 2),
        new Ingredient('Tomato', 2),
      ]
    ),
    new Recipe(
      2,
      'Burger',
      'Delicious easy cheese burger',
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

  getRecipeById(id: number) {
    for (const recipe of this.recipes) {
      if (recipe.id === id) {
        return recipe;
      }
    }
  }


}


