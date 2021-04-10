import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ObservablePageComponent} from './pages/observable-page/observable-page.component';
import {HotAndColdObservablesComponent} from './pages/observable-page/children/hot-and-cold-observables/hot-and-cold-observables.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'observables',
    component: ObservablePageComponent,
    children: [
      { path: 'hot-and-cold', component: HotAndColdObservablesComponent }
    ]},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
