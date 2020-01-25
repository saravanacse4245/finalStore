import { NgModule } from '@angular/core';
import { Routes, RouterModule , PreloadAllModules} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MapPageComponent } from './map-page/map-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomePageComponent},
  {path: 'product', component: ProductPageComponent},
  {path: 'map', component: MapPageComponent},
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {
  //   // preload all modules; optionally we could
  //   // implement a custom preloading strategy for just some
  //   // of the modules (PRs welcome 😉)
  //   preloadingStrategy: PreloadAllModules
  // })],
  // exports: [RouterModule]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, ProductPageComponent, MapPageComponent]
