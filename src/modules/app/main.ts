import { Dependencies } from "../store/dependencies";
import { AppStore, createStore } from "../store/store";

export class App {
  public dependencies: Dependencies;
  public store: AppStore;

  constructor() {
    this.dependencies = this.setupDependencies();
    this.store = createStore({ dependencies: this.dependencies });
  }

  setupDependencies(): Dependencies {
    return {};
  }
}

export const app = new App();
