import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { TextLeftImageRightComponent } from './containers/text-left-image-right/text-left-image-right.component';
import { TextRightImageLeftComponent } from './containers/text-right-image-left/text-right-image-left.component';
import { TitleWithTextComponent } from './components/title-with-text/title-with-text.component';
import { HomeBannerImageComponent } from './components/home-banner-image/home-banner-image.component';
import { HomeBannerTextComponent } from './components/home-banner-text/home-banner-text.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    TextLeftImageRightComponent,
    TextRightImageLeftComponent,
    TitleWithTextComponent,
    HomeBannerImageComponent,
    HomeBannerTextComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'nl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
