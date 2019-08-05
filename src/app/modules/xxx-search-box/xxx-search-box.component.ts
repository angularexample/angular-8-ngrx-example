import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import {XxxEventMgrService, XxxMessageService, XxxStateStoreService} from '../../xxx-common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'xxx-search-box',
  templateUrl: './xxx-search-box.component.html',
  styleUrls: ['./xxx-search-box.component.scss']
})

export class XxxSearchBoxComponent implements OnDestroy {
  isButtonDisabled = false;
  isSearchTextNotChanged = true;
  searchText: string;
  subscriptionButtonEnable: Subscription;
  private lastSearchText: string = null;

  constructor(
      private changeDetectorRef: ChangeDetectorRef,
      private xxxEventMgrService: XxxEventMgrService,
      private xxxMessageService: XxxMessageService,
      private xxxStateStoreService: XxxStateStoreService
  ) {
    this.subscribeToMessages();
  }

  onInputKeyUp() {
    this.checkForChangedSearchText();
    this.changeDetectorRef.detectChanges();
  }

  onSearchClick() {
    this.lastSearchText = this.searchText;
    this.isButtonDisabled = true;
    this.changeDetectorRef.detectChanges();
    this.xxxStateStoreService.putItem('searchText', this.searchText);
    this.xxxEventMgrService.handleEvent('searchBox.search');
  }

  ngOnDestroy(): void {
    this.subscriptionButtonEnable.unsubscribe();
  }

  private checkForChangedSearchText() {
    this.isSearchTextNotChanged = (this.searchText === this.lastSearchText);
  }

  private subscribeToMessages() {
    this.subscriptionButtonEnable = this.xxxMessageService.subscribe('searchButtonEnable', () => {
      this.isButtonDisabled = false;
      this.checkForChangedSearchText();
      this.changeDetectorRef.detectChanges();
    });
  }
}
