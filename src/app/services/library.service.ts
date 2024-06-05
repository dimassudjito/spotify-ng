import { Injectable } from '@angular/core';
import { PLAYLISTS } from '../mock/playlists.mock';
import { ALBUMS } from '../mock/albums.mock';
import { PODCAST_AND_SHOWS } from '../mock/podcasts-and-shows.mock';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  getPlaylists() {
    return PLAYLISTS;
  }
  getAlbums() {
    return ALBUMS;
  }
  getPodcastsAndShows() {
    return PODCAST_AND_SHOWS;
  }
  getLibrary(){
    const library = [...PLAYLISTS, ...ALBUMS, ...PODCAST_AND_SHOWS];
    return library;
  }
}
