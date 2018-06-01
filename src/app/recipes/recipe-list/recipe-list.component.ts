import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

import {Recipe} from '../recipe.modal';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs/internal/Subscription';
import {Response} from '@angular/http';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
