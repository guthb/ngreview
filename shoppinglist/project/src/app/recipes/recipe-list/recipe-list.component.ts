import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe( 'Test Recipe', 'test details', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F11%2F08%2F15%2F34%2Frecipe-2930786_960_720.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fen%2Frecipe-comisa-healthy-tomato-2930786%2F&docid=PgeCXCA9VZvI_M&tbnid=TKPoP0IWdRySlM%3A&vet=10ahUKEwiJ6MKJ7Z3eAhVr6oMKHTYEAN0QMwhvKAQwBA..i&w=960&h=539&safe=off&bih=720&biw=1440&q=recipe&ved=0ahUKEwiJ6MKJ7Z3eAhVr6oMKHTYEAN0QMwhvKAQwBA&iact=mrc&uact=8')
  ];

  constructor() { }

  ngOnInit() {
  }

}
