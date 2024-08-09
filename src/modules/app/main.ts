import { resources } from "@/src/locales";
import { Dependencies } from "../store/dependencies";
import { AppStore, createStore } from "../store/store";
import i18n, { LanguageDetectorModule } from "i18next";
import { initReactI18next } from "react-i18next";
import "intl-pluralrules";
import { ExpoDeviceLocaleProvider } from "../core/expo-device-locale.provider";

export class App {
  public dependencies: Dependencies;
  public store: AppStore;

  constructor() {
    this.dependencies = this.setupDependencies();
    this.store = createStore({ dependencies: this.dependencies });
    this.setupI18n();
  }

  setupDependencies(): Dependencies {
    return {
      deviceLocaleProvider: new ExpoDeviceLocaleProvider(),
    };
  }

  setupI18n() {
    i18n
      .use(this._languageDetector())
      .use(initReactI18next)
      .init({
        lng: "en",
        fallbackLng: "en",
        supportedLngs: ["en", "fr"],
        compatibilityJSON: "v3",
        resources,
      });
  }

  private _languageDetector(): LanguageDetectorModule {
    return {
      type: "languageDetector",
      detect: this.dependencies.deviceLocaleProvider.getLocale,
      cacheUserLanguage: () => {},
      init: () => {},
    };
  }
}

export const app = new App();
