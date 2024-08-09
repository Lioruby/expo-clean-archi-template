import { IStorageProvider } from "../../providers/storage.provider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class RNAsyncStorageProvider implements IStorageProvider {
  async save(key: string, value: string): Promise<void> {
    await AsyncStorage.setItem(key, value);
  }

  async get(key: string): Promise<string | null> {
    return await AsyncStorage.getItem(key);
  }

  async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }
}
