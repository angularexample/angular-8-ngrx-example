import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from '@env/environment';
import { XxxAlertService, XxxAlertType, XxxDataService } from '@app/xxx-common';

@Component({
  selector: 'xxx-questions-page',
  styleUrls: ['./xxx-questions-page.component.scss'],
  templateUrl: './xxx-questions-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxQuestionsPageComponent implements OnDestroy, OnInit {
  pageNumber: number = null;
  isMorePages = false;
  isBusy = false;
  isError = false;
  isResult = false;
  questions: any = [];
  private apiKey = 'U4DMV*8nvpm3EOpvf69Rxw((';
  private searchText: string = null;
  private subscriptionRouteParam: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private xxxAlertService: XxxAlertService,
    private xxxDataService: XxxDataService
  ) {}

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }

  ngOnDestroy() {
    this.subscriptionRouteParam.unsubscribe();
  }

  decodeHtmlEntities(text) {
    if (text === undefined || text === '') {
      return '';
    }
    const doc = new DOMParser().parseFromString(text, 'text/html');
    let newText = doc.documentElement.textContent;
    newText = newText.replace('&quot;', '"');
    return newText;
  }

  goToFirstPage() {
    const url = [environment.url.questions];
    const queryParams = {
      title: this.searchText
    };
    this.router.navigate(url, { queryParams: queryParams });
  }

  goToPreviousPage() {
    const url = [environment.url.questions];
    const page = this.pageNumber > 2 ? this.pageNumber - 1 : null;
    const queryParams = {
      title: this.searchText,
      page: page
    };
    this.router.navigate(url, { queryParams: queryParams });
  }

  goToNextPage() {
    const url = [environment.url.questions];
    const queryParams = {
      title: this.searchText,
      page: this.pageNumber + 1
    };
    this.router.navigate(url, { queryParams: queryParams });
  }

  questionOnClick(questionId) {
    const url = [environment.url.answers + '/' + questionId];
    this.router.navigate(url);
  }

  private subscribeToRouteParams() {
    this.subscriptionRouteParam = this.route.queryParams.subscribe(params => {
      const searchText = params['title'] || '';
      const pageNumber = +params['page'] || 1;
      if (typeof searchText === 'string' && searchText.length > 0) {
        this.processSearchQuery(searchText, pageNumber);
      } else {
        this.xxxAlertService.openAlert(
          XxxAlertType.WARN,
          'Title missing. Try a new search.'
        );
      }
    });
  }

  private processSearchQuery(searchText: string, pageNumber: number) {
    let isChanged = false;
    if (searchText !== this.searchText) {
      this.searchText = searchText;
      isChanged = true;
    }
    if (pageNumber !== this.pageNumber) {
      this.pageNumber = pageNumber;
      isChanged = true;
    }
    if (isChanged) {
      this.getQuestions();
    }
  }

  private getQuestions() {
    this.isBusy = true;
    this.isResult = false;
    this.isError = false;
    let url = environment.url.api;
    url += 'search/advanced';
    url += '?key=' + this.apiKey;
    url += '&title=' + encodeURI(this.searchText);
    url += '&answers=1';
    url += '&site=stackoverflow';
    url += '&filter=withbody';
    url += '&page=' + this.pageNumber.toString();
    url += '&order=desc';
    url += '&sort=votes';
    this.xxxDataService.getData(url).subscribe(
      result => this.onSuccessGetQuestions(result),
      () => this.onErrorGetQuestions()
    );
  }

  private onSuccessGetQuestions(result) {
    this.isBusy = false;
    if (
      result.hasOwnProperty('items') &&
      typeof result.items === 'object' &&
      result.items.length > 0
    ) {
      this.questions = result.items;
      this.isResult = true;
    } else {
      const warningMsg = 'No Results Found';
      this.xxxAlertService.openAlert(XxxAlertType.WARN, warningMsg);
    }
    this.isMorePages =
      result.hasOwnProperty('has_more') &&
      typeof result.has_more === 'boolean' &&
      result.has_more;
    this.changeDetectorRef.detectChanges();
  }

  // Errors are handled by global interceptor.
  private onErrorGetQuestions() {
    this.isBusy = false;
    this.isError = true;
    this.changeDetectorRef.detectChanges();
  }
}
