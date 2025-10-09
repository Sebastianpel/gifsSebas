import {Component, inject} from '@angular/core';
import {GifsService} from '../../services/gifs.service';
import {GifList} from '../../components/gif-list/gif-list';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-page',
  imports: [GifList, FormsModule],
  templateUrl: './search-page.html',
  styles: ``
})
export default class SearchPage {
  gifService = inject(GifsService);
  searchQuery: string = '';

  onSearch(event: Event) {
    event.preventDefault();
    if (this.searchQuery.trim()) {
      this.gifService.searchGifsByQuery(this.searchQuery.trim());
    }
  }
}
