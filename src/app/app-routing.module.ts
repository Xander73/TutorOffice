import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { NgModule } from "@angular/core";


const GLOBAL_ROUTES: Routes = [
    { path: 'main', component: MainPageComponent },
    { path: 'products', component: ProductsPageComponent },
    { path: 'about-me', component: AboutMeComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(GLOBAL_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {

}