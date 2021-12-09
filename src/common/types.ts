export interface AppStore {
  country: CountryStore;
}

export interface CountryStore {
  countries: Array<Country>;
}

export interface Country {
  code?: string;
  name?: string;
  native?: string;
  phone?: string;
  continent: Continent;
  capital?: string;
  currency?: string;
  emoji?: string;
  emojiU?: string;
}

export interface Continent {
  code?: string;
  name?: string;
}

export interface Language {
  code?: string;
  name?: string;
}

export interface CountryFilter {
  continentCode: string;
  currencyCode: string;
}
