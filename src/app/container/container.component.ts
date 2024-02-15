import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
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
