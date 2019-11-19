import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';

import { setSearchText } from '@app/modules/xxx-search-box/xxx-search-box.actions';
import { Store } from '@ngrx/store';
import * as fromSearchBox from '@app/modules/xxx-search-box/xxx-search-box.reducer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'xxx-search-box',
  templateUrl: './xxx-search-box.component.html',
  styleUrls: ['./xxx-search-box.component.scss']
})
export class XxxSearchBoxComponent {
  isButtonDisabled = false;
  isSearchTextNotChanged = true;
  searchText: string;
  private lastSearchText: string = null;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store<{ searchBox: fromSearchBox.State }>
  ) {}

  onInputKeyUp() {
    this.checkForChangedSearchText();
    this.changeDetectorRef.detectChanges();
  }

  onSearchClick() {
    this.lastSearchText = this.searchText;
    this.isButtonDisabled = true;
    this.changeDetectorRef.detectChanges();
    this.store.dispatch(setSearchText({ searchText: this.searchText }));
  }

  private checkForChangedSearchText() {
    this.isSearchTextNotChanged = this.searchText === this.lastSearchText;
  }
}
