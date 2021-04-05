import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { TextLeftImageRightComponent } from './containers/text-left-image-right/text-left-image-right.component';
import { TextRightImageLeftComponent } from './containers/text-right-image-left/text-right-image-left.component';
import { TitleWithTextComponent } from './components/title-with-text/title-with-text.component';
import { HomeBannerImageComponent } from './components/home-banner-image/home-banner-image.component';
import { HomeBannerTextComponent } from './components/home-banner-text/home-banner-text.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
