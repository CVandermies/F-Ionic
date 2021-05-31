import { Component, OnInit } from '@angular/core';
import { RestService, Categorie } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  categories: Categorie[] = [];
  category: Categorie = {  
    id: 0, 
    label : 'test', 
    description: 'test', 
    movies : [] };
  show = false;


  //exécuté au moment de la création de ce component
  constructor(public rest: RestService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }
 
  getCategories() {
    this.rest.getCategories().subscribe(
      (resp) => {
        console.log(resp);
        this.categories = resp;
      }
    )
  }

  add() {
    this.router.navigate(['/category-add']);
  }
  
  showDetail(category){
    console.log(category);
    this.category = category;
    this.show = true;
  }

  editCategory(id:number){
    this.router.navigate(['/category/edit/' + id]);
  }
  
}
