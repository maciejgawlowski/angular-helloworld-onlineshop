import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    //ActivatedRoute zawiera informacje o route, parametrach, i innych danych powiązanych z route
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    //weź product na podstawie productId z route i list products
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product){
    window.alert('Your product has been added to the cart');
    this.cartService.addToCart(product);
  }

}