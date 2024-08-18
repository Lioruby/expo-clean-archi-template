export interface IStorageProvider {
  save(key: string, value: string): Promise<void>;
  get(key: string): Promise<Record<string, unknown> | null>;
  remove(key: string): Promise<void>;
}
