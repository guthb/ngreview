import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe( 'Test Recipe', 'test details', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VwjfPX9Toc_99nnw6GLeGDrtH9Y4UHYfJ9yTut5Gw_EeKdGE_g')
  ];

  constructor() { }

  ngOnInit() {
  }

}
