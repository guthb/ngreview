import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe( 'Test Recipe', 'test details', 'https://upload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F39%2FRecipe.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe.jpg&docid=FCKyUIOU_PHYFM&tbnid=z09hcQfR0Jt4dM%3A&vet=10ahUKEwizqKLl_p3eAhWnVN8KHYteCaIQMwhsKAEwAQ..i&w=800&h=672&safe=off&bih=720&biw=1789&q=recipe&ved=0ahUKEwizqKLl_p3eAhWnVN8KHYteCaIQMwhsKAEwAQ&iact=mrc&uact=8')
  ];

  constructor() { }

  ngOnInit() {
  }

}
