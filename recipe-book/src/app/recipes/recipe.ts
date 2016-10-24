import{ Ingredients } from "../shared/ingredients";
export class Recipe {
  constructor(public name, public description, public imagePath, public ingredients: Ingredients[]){}
}
