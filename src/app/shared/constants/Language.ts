export interface Language {
  key: string;
}

export const DEFAULT_LANGUAGE: Language = { key: 'en' };

export const LANGUAGES: Language[] = [
  DEFAULT_LANGUAGE,
  { key: 'nl' },
];
