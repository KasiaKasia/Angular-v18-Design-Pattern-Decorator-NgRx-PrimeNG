import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrdersStore } from '../configuration/signal-store/orders.store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent
  ],

})
export class SharedModule { }
