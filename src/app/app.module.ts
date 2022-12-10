import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FaComponent } from './fa/fa.component';
import { FbComponent } from './fb/fb.component';

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
    FbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
