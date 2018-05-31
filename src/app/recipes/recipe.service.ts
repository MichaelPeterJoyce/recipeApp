import {Injectable} from '@angular/core';
import {Recipe} from './recipe.modal';
import {Ingredient} from '../shared/ingredient.modal';
import {Subject} from 'rxjs/internal/Subject';

@Injectable()
export class RecipeService {
  recipesChnaged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      0,
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
      1,
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChnaged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChnaged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChnaged.next(this.recipes.slice());
  }

}


