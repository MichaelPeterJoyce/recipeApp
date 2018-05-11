import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.modal';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredient(this.recipe.ingredients);
  }
}
