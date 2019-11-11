import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { setSearchText } from '@app/modules/xxx-search-box/xxx-search-box.actions';
import { Store, select } from '@ngrx/store';
import * as fromSearchBox from '@app/modules/xxx-search-box/xxx-search-box.reducer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'xxx-search-box',
  templateUrl: './xxx-search-box.component.html',
  styleUrls: ['./xxx-search-box.component.scss']
})
export class XxxSearchBoxComponent implements OnDestroy, OnInit {
  isButtonDisabled = false;
  isSearchTextNotChanged = true;
  searchText: string;
  private lastSearchText: string = null;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store<{ searchBox: fromSearchBox.State }>
  ) {}

  ngOnInit(): void {
    // this.subscribeToMessages();
  }

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

  ngOnDestroy(): void {
    // this.subscriptionButtonEnable.unsubscribe();
  }

  private checkForChangedSearchText() {
    this.isSearchTextNotChanged = this.searchText === this.lastSearchText;
  }

  // private subscribeToMessages() {
  //   this.subscriptionButtonEnable = this.xxxMessageService.subscribe('searchButtonEnable', () => {
  //     this.isButtonDisabled = false;
  //     this.checkForChangedSearchText();
  //     this.changeDetectorRef.detectChanges();
  //   });
  // }
}
