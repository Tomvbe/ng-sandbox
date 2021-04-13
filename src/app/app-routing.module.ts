import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {ContactComponent} from './pages/contact/contact.component';
import {ObservablePageComponent} from './pages/observable-page/observable-page.component';
import {HotAndColdObservablesComponent} from './pages/observable-page/children/hot-and-cold-observables/hot-and-cold-observables.component';
import {HomeComponent} from './pages/home/home.component';
import {LocalizeRouterHttpLoader} from '@gilsdav/ngx-translate-router-http-loader';
import {LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings} from '@gilsdav/ngx-translate-router';

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient): any{
  return new LocalizeRouterHttpLoader(translate, location, settings, http);
}

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'observables',
    component: ObservablePageComponent,
    children: [
      { path: 'hot-and-cold', component: HotAndColdObservablesComponent }
    ]},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule { }
