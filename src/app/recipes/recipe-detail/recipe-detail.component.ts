import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.modal';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id']; // (+) converts string 'id' to a number
      this.recipe = this.recipeService.getRecipeById(id);
    });
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredient(this.recipe.ingredients);
  }
}
