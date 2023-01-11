import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any[] = [
    {
      "id": 1,
      "title": "accusamus beatae",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952",
      "price": "100",
      "color": "Black",
      "available": "Available"
    },
    {
      "id": 2,
      "title": "reprehenderit est",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796",
      "price": "1000",
      "color": "Black",
      "available": "Available"
    },
    {
      "id": 3,
      "title": "officia porro iure",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355",
      "price": "500",
      "color": "White",
      "available": "Not Available"
    },
    {
      "id": 4,
      "title": "culpa odio esse",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776",
      "price": "5000",
      "color": "black",
      "available": "Not Available"
    },
    {
      "id": 5,
      "title": "natus nisi omnis",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
      "price": "300",
      "color": "black",
      "available": "Available"
    },
    {
      "id": 6,
      "title": "accusamus ea aliquid",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2",
      "price": "3000",
      "color": "White",
      "available": "Not Available"
    }
  ];



}
