import { resources } from "@/src/locales";
import { Dependencies } from "../store/dependencies";
import { AppStore, createStore } from "../store/store";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { languageDetector } from "../shared/react-native/utils/language-detector";
import "intl-pluralrules";

export class App {
  public dependencies: Dependencies;
  public store: AppStore;

  constructor() {
    this.setupI18n();
    this.dependencies = this.setupDependencies();
    this.store = createStore({ dependencies: this.dependencies });
  }

  setupDependencies(): Dependencies {
    return {};
  }

  setupI18n() {
    i18n
      .use(languageDetector)
      .use(initReactI18next)
      .init({
        lng: "en",
        fallbackLng: "en",
        supportedLngs: ["en", "fr"],
        compatibilityJSON: "v3",
        resources,
      });
  }
}

export const app = new App();
