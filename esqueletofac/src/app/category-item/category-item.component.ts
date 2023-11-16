import { Component, Input,  } from '@angular/core';
import { Category } from '../pages/tabs/models/category.models';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent  {
  @Input () item: Category | undefined;

}
