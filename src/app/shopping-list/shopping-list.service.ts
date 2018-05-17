import {Ingredient} from '../shared/ingredient.modal';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];
  ingredientsChanged = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients);
  }
}
