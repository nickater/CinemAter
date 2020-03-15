export interface Media {
  id?: string;
  type: 'movie' | 'tv-show';
  name: string;
  priority: string;
  downloaded: boolean;
  dateDownloaded: Date;
}
