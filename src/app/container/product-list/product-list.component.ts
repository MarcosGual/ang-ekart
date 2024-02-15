import { Component } from '@angular/core';
import { products } from '../../../database/product-list';
import { Product } from '../../models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = products;
}
