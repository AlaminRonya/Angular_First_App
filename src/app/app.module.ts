import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FaComponent } from './fa/fa.component';
import { FbComponent } from './fb/fb.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';


// const routes: Routes = [
//   {
//     path: '', component: FirstComponent,
//     children: [
//       {
//         path: 'fa-a', component: FaComponent
//       },{
//         path: 'fb-b', component: FbComponent
//       }
//     ]
//   },{
//     path: 's', component: SecondComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FaComponent,
    FbComponent,
    ContainerComponent,
    HeaderComponent,
    NavComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
