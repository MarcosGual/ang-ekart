import { Component, Input } from '@angular/core';
import { products } from '../../../database/product-list';
import { Product } from '../../models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  selectedFilterRadioButton: string = 'all';
  products: Product[] = products;
  selectedProduct: Product;

  @Input() searchText: string = "";

  productsInStock = products.filter((p) => p.is_in_inventory === true).length;
  productsOutOfStock = products.filter((p) => p.is_in_inventory === false)
    .length;

  onFilterChanged(value: string) {
    // console.log('on filter activated - ' + value);
    this.selectedFilterRadioButton = value;
  }
}
