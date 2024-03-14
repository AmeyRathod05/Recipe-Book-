import { Component, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  // The non-null assertion operator (!) removes null and undefined from a type without doing any explicit type checking.
  @Input() recipe : Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService : RecipeService){

  }
  onSelected(){
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);


  }

}
