import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { TextLeftImageRightComponent } from './containers/text-left-image-right/text-left-image-right.component';
import { TextRightImageLeftComponent } from './containers/text-right-image-left/text-right-image-left.component';
import { TitleWithTextComponent } from './components/title-with-text/title-with-text.component';
import { HomeBannerImageComponent } from './components/home-banner-image/home-banner-image.component';
import { HomeBannerTextComponent } from './components/home-banner-text/home-banner-text.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import {AppRoutingModule} from './app-routing.module';
import { ObservablePageComponent } from './pages/observable-page/observable-page.component';
import { HotAndColdObservablesComponent } from './pages/observable-page/children/hot-and-cold-observables/hot-and-cold-observables.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import {SharedModule} from './shared/shared.module';
import {HttpConfigInterceptor} from './interceptors/httpconfig.interceptor';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TextLeftImageRightComponent,
    TextRightImageLeftComponent,
    TitleWithTextComponent,
    HomeBannerImageComponent,
    HomeBannerTextComponent,
    HomeComponent,
    ContactComponent,
    ObservablePageComponent,
    HotAndColdObservablesComponent,
    NavItemComponent,
    NavListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'nl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
