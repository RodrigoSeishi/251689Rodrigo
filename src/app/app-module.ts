import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './home-component/home-component';
import { ProdutoComponent } from './produto-component/produto-component';
import { SobreComponent } from './sobre-component/sobre-component';
import { ProdutoDetalheComponent } from './produto-detalhe-component/produto-detalhe-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    ProdutoComponent,
    SobreComponent,
    ProdutoDetalheComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
