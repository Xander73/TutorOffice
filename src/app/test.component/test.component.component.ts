import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-test.component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.component.html',
  styleUrl: './test.component.component.css'
})
export class TestComponentComponent {
  products = [
    { name: 'Товар 1', image: "Image", price: 1000 },
    { name: 'Товар 2', image: "Image", price: 2000 },
    { name: 'Товар 3', image: "Image", price: 3000 },
    { name: 'Товар 4', image: "Image", price: 4000 }
  ]

  buyProduct(product: any) {
    console.log('Bought ' + product.name)
  }
}
