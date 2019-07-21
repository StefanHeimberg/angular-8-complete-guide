import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListModule } from './recipe-list/recipe-list.module';

import { RecipesComponent} from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent
    ],
    imports: [
        CommonModule,
        RecipeListModule
    ]
})
export class RecipesModule { }
