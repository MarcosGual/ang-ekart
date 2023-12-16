import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  addToCart: number = 0;
  product = {
    name: 'Iphone 8',
    price: 780,
    description: 'Iphone 8 is the best phone',
    color: 'black',
    discount: 0.15,
    inStock: 1,
    pImage: '/assets/images/iphone8.png'
  }

  getDiscountedPrice() {
    return this.product.price * (1 - this.product.discount);
  }

  incrementCartValue() {
    this.product.inStock--;
    this.addToCart++;
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.product.inStock++;
      this.addToCart--;
    }
  }

}
