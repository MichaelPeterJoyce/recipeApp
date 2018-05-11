import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients);
  }
}
