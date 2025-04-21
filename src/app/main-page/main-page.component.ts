import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  products = [
    { name: 'Товар 1', price: 1000, video: 'video/video_2024-12-12_00-05-46.mp4' },
    { name: 'Товар 2', price: 2000, video: 'video/video_2024-12-12_00-05-57.mp4' },
    { name: 'Товар 3', price: 3000, video: 'video/video_2024-12-12_00-06-02.mp4' },
    { name: 'Товар 4', price: 4000, video: 'video/video_2024-12-12_00-06-08.mp4' },
    // Добавьте больше товаров по мере необходимости
  ];

  addToCart(product: any) {
    console.log(`${product.name} добавлен в корзину.`);
    // Реализуйте логику добавления товара в корзину
  }
}
