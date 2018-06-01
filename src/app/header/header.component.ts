import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Ingredient} from '../shared/ingredient.modal';
import {RecipeService} from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private ingredients: Ingredient[];
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  saveRecipes() {
    this.recipeService.saveRecipes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
