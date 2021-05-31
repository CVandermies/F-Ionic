import { Component, OnInit } from '@angular/core';
import { RestService, Categorie } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit {

  category : Categorie;
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
    this.category = {id: 0, label:'', description:'', movies:[]};
   }

  ngOnInit() {
    this.rest.getCategorie(this.route.snapshot.params.id).subscribe(
      (res) => {
        this.category = res;
      }
    ) 
  }

  updateCategory(){
    this.rest.updateCategory(this.category).subscribe(
      (result) => {
        this.router.navigate(['/category']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteCategory(id:any){
    this.rest.deleteCategory(id).subscribe(
      (result) => {
        this.router.navigate(['/category']);
      }
    )
  }

}
