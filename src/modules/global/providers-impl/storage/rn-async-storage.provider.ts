import { IStorageProvider } from "../../core/providers/storage.provider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class RNAsyncStorageProvider implements IStorageProvider {
  async save(key: string, value: string): Promise<void> {
    await AsyncStorage.setItem(key, value);
  }

  async get(key: string): Promise<Record<string, unknown> | null> {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }
}
