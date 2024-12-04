import { Routes } from '@angular/router';
import path from 'node:path';
import { TestComponentComponent } from './test.component/test.component.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    {
        path: "test",
        component: TestComponentComponent
    },
    { path: 'home', component: MainPageComponent },
    { path: 'products', component: ProductsPageComponent },
    { path: 'about-me', component: AboutMeComponent }
];
