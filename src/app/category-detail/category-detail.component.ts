import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {

  @Input() category : any = {  
    id: 0, 
    label : '', 
    description: '', 
    movies : [] };

    movies : any = {  
      id: 0, 
      title : '', 
      content: '', 
      rating : 0,
      image : '' };

  constructor() { }

  ngOnInit() {}

}
