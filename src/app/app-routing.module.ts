import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaComponent } from './fa/fa.component';
import { FbComponent } from './fb/fb.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: '', component: FirstComponent,
    children: [
      {
        path: 'fa-a', component: FaComponent
      },{
        path: 'fb-b', component: FbComponent
      },{
        path: 'container', component: ContainerComponent
      }
    ]
  },{
    path: 's', component: SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
