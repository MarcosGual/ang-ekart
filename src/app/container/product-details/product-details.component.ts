import { Component } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: Product;
}
