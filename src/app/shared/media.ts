export interface Media {
  type: 'movie' | 'tv-show';
  name: string;
  priority: string;
  downloaded: boolean;
  dateDownloaded: Date;
}
