import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

import {Recipe} from '../recipe.modal';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs/internal/Subscription';
import {Response} from '@angular/http';
import {ResponseBodyHandler} from '_debugger';

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
    this.subscription = this.recipeService.recipesChnaged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipeService.getRecipes().subscribe((response) => {
      this.recipes = <Recipe[]> response;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  saveRecipes() {
    this.recipeService.saveRecipes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
