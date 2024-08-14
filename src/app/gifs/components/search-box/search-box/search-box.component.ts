import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar Gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >`
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
    public TagInput !: ElementRef<HTMLInputElement>

  constructor( private gifsService : GifsService){}

  searchTag() {
    const newTag = this.TagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.TagInput.nativeElement.value = '';
  }
}
