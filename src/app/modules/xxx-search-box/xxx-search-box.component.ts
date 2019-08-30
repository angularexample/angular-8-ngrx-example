import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { XxxSearchService } from '@app/modules/xxx-search/xxx-search.service';
import { setSearchText } from '@app/modules/xxx-search-box/xxx-search-box.actions';

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
  subscriptionButtonEnable: Subscription;
  private lastSearchText: string = null;

  constructor(
      private changeDetectorRef: ChangeDetectorRef,
      private xxxSearchService: XxxSearchService
  ) {
  }

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
    store.dispatch(setSearchText({ searchText: this.searchText }));
  }

  ngOnDestroy(): void {
    // this.subscriptionButtonEnable.unsubscribe();
  }

  private checkForChangedSearchText() {
    this.isSearchTextNotChanged = (this.searchText === this.lastSearchText);
  }

  // private subscribeToMessages() {
  //   this.subscriptionButtonEnable = this.xxxMessageService.subscribe('searchButtonEnable', () => {
  //     this.isButtonDisabled = false;
  //     this.checkForChangedSearchText();
  //     this.changeDetectorRef.detectChanges();
  //   });
  // }
}
