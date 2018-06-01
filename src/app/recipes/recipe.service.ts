import {Injectable} from '@angular/core';
import {Recipe} from './recipe.modal';
import {Ingredient} from '../shared/ingredient.modal';
import {Subject} from 'rxjs/internal/Subject';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient) {
  }

  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  getRecipes() {
    this.http.get<Recipe[]>('https://recipeapp-62eda.firebaseio.com/recipes.json').subscribe(data => {
      this.recipes = data;
      this.recipes.map((recipe, index) => {
          recipe.id = index;
      });
      this.recipesChanged.next(this.recipes.slice());
    });
  }

  getRecipeById(id: number) {
    for (const recipe of this.recipes) {
      if (recipe.id === id) {
        return recipe;
      }
    }
  }

  saveRecipes() {
    return this.http.put('https://recipeapp-62eda.firebaseio.com/recipes.json', this.recipes);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}


