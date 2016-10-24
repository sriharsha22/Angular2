import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {Ingredients} from "../shared/ingredients";
import {ShoppingListService} from "./shopping-list.service";


@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredients;
  @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private sls: ShoppingListService) {}

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredients: Ingredients) {
    const newIngredients = new Ingredients(ingredients.name, ingredients.amount);
    if (!this.isAdd) {
      this.sls.editItem(this.item, newIngredients);
      this.onClear();
    } else {
      this.item = newIngredients;
      this.sls.addItem(this.item);
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
