export interface UrlModel {
  getLastAvailable(): Promise<number>;
  getUrl(Url: string): Promise<string | null>;
  shortenUrl(Url: string, shortUrl: string): Promise<void>;
}
