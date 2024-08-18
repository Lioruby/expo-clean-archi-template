import { IStorageProvider } from "../../core/providers/storage.provider";

export class InMemoryStorageProvider implements IStorageProvider {
  private storage: Record<string, unknown> = {};

  async save(key: string, value: unknown): Promise<void> {
    this.storage[key] = value;
  }

  async get(key: string): Promise<Record<string, unknown> | null> {
    return this.storage[key] as Record<string, unknown> | null;
  }

  async remove(key: string): Promise<void> {
    delete this.storage[key];
  }
}
