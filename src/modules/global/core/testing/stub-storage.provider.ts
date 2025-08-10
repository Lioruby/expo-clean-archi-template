import { IStorageProvider } from "../providers/storage.provider";

export class StubStorageProvider implements IStorageProvider {
  private storage: Record<string, string> = {};

  async save(key: string, value: string): Promise<void> {
    this.storage[key] = value;
  }

  async get(key: string): Promise<string | null> {
    return this.storage[key] || null;
  }

  async remove(key: string): Promise<void> {
    delete this.storage[key];
  }
}
