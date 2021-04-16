import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageComponent} from './components/language/language.component';



@NgModule({
  declarations: [LanguageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    LanguageComponent
  ]
})
export class SharedModule { }
