import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [] // removining the provider from the recipe main component will provide dinamic data adding to the module
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

}
