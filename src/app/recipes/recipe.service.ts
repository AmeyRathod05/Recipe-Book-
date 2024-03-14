import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

 recipeSelected = new EventEmitter<Recipe>();
   

 private recipes: Recipe[] = [
        new Recipe('Tasty Pizza',
        'A super-tasty Pizza! - just awesome!',
         '/assets/pizza.jpg',
         [ 
            new Ingredient ('Onion', 2),
            new Ingredient('Tomato',2)
        ]),
        new Recipe('Dynamite Burger ',
        'Juicy, big, loaded with toppings of your choice.',
         '/assets/burger.jpg',
         [ 
            new Ingredient ('Onion', 4),
            new Ingredient('Tomato',4)
        ])
       ];

       constructor(private slService : ShoppingListService){

       }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);

    }

}