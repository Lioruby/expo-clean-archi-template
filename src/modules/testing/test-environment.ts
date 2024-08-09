import { InMemoryAnalyticsGateway } from "../analytics/gateways-impl/in-memory.analytics-gateway";
import { StubDeviceLocaleProvider } from "../global/providers-impl/device-locale/stub-device-local.provider";
import { InMemoryStorageProvider } from "../global/providers-impl/storage/stub-storage.provider";
import { AppState } from "../store/app-state";
import { Dependencies } from "../store/dependencies";
import { createStore } from "../store/store";

/**
 * Create testing dependencies with provided defaults
 * @param dependencies
 * @returns
 */
const createDependencies = (
  dependencies?: Partial<Dependencies>,
): Dependencies => ({
  deviceLocaleProvider: new StubDeviceLocaleProvider(),
  storageProvider: new InMemoryStorageProvider(),
  analyticsGateway: new InMemoryAnalyticsGateway(),
  ...dependencies,
});

/**
 * Creates store initialized with a partial state
 * @param config
 * @returns
 */
export const createTestStore = (config?: {
  initialState?: Partial<AppState>;
  dependencies?: Partial<Dependencies>;
}) => {
  const initialStore = createStore({
    dependencies: createDependencies(config?.dependencies),
  });

  const initialState = {
    ...initialStore.getState(),
    ...config?.initialState,
  };

  const store = createStore({
    initialState,
    dependencies: createDependencies(config?.dependencies),
  });

  return store;
};

/**
 * Useful for testing selectors without setting redux up
 * @param partialState
 * @returns
 */
export const createTestState = (partialState?: Partial<AppState>) => {
  const store = createStore({
    dependencies: createDependencies(),
  });

  const storeInitialState = store.getState();

  const merged = {
    ...storeInitialState,
    ...partialState,
  };

  return createTestStore({ initialState: merged }).getState();
};
