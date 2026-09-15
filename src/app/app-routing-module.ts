import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home-component/home-component';
import { ProdutoComponent } from './produto-component/produto-component';
import { SobreComponent } from './sobre-component/sobre-component';
import { ProdutoDetalheComponent } from './produto-detalhe-component/produto-detalhe-component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
