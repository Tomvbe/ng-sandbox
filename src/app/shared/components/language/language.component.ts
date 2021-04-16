import {Component, OnInit} from '@angular/core';
import {LocalizeRouterService} from '@gilsdav/ngx-translate-router';
import {DEFAULT_LANGUAGE, Language, LANGUAGES} from '../../constants/Language';

@Component({
  selector: 'app-language',
  templateUrl: 'language.component.html',
  styleUrls: ['language.component.scss'],
})
export class LanguageComponent implements OnInit {

  selectedLanguage: Language;
  languages: Language[];

  constructor(private localize: LocalizeRouterService) {}

  ngOnInit() {
    this.selectLanguage(this.localize.parser.currentLang);
  }

  onChangeLanguage(languageKey: string): void {
    this.localize.changeLanguage(languageKey);
    this.selectLanguage(languageKey);
  }

  selectLanguage(languageKey: string): void {
    this.selectedLanguage = LANGUAGES.find((item) => item.key === languageKey) || DEFAULT_LANGUAGE;
    this.languages = LANGUAGES.filter(l => l.key !== this.selectedLanguage?.key);
  }
}

