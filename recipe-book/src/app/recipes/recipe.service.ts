import { Injectable } from '@angular/core';
import {Recipe } from './recipe';
import {Ingredients} from '../shared/ingredients';
import {Headers, Http, Response } from "@angular/http";
@Injectable()
export class RecipeService {
  private recipes: Recipe[]=[
    new Recipe('Quick Chicken Nuggets', 'These breaded chicken tenders are served with a mustard and mayonnaise mixture for dipping. Serve steamed green beans with this recipe for a quick-and-easy family meal.','http://images.meredith.com/bhg/images/recipe/p_R115589.jpg',[
    new Ingredients('bread crumbs', 1),
    new Ingredients('Chicken Tenders', 1),
    new Ingredients('Dijon mustard', 2)
    ]),

    new Recipe('Maryland Fried Chicken with Creamy Gravy','What sets this fried chicken apart from the typical recipe is that milk is added after partially cooking the chicken so the pieces simmer rather than fry.','http://images.meredith.com/content/dam/bhg/Images/recipe/34/R087164.jpg.rendition.largest.jpg',[]),

    new Recipe('Chicken with Artichokes','Using frozen artichokes in this Italian-style chicken dish makes assembling the casserole recipe convenient because the inedible parts of the vegetable are removed.','http://images.meredith.com/content/dam/bhg/Images/recipe/40/R074982.jpg.rendition.largest.jpg',[])

  ];
  constructor( ) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }




}
