import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from '@env/environment';
import { XxxAlertService, XxxAlertType, XxxDataService } from '@app/xxx-common';
import { Store } from '@ngrx/store';
import * as fromSearchBox from '@app/modules/xxx-search-box/xxx-search-box.reducer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'xxx-answers-page',
  styleUrls: ['./xxx-answers-page.component.scss'],
  templateUrl: './xxx-answers-page.component.html'
})
export class XxxAnswersPageComponent implements OnDestroy, OnInit {
  answers: any = [];
  isBusy = false;
  isError = false;
  isSearchText = false;
  isResult = false;
  question: any = {};
  private apiKey = 'U4DMV*8nvpm3EOpvf69Rxw((';
  private questionId: string;
  private searchText = '';
  private subscriptionRouteParam: Subscription;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ searchBox: fromSearchBox.State }>,
    private xxxAlertService: XxxAlertService,
    private xxxDataService: XxxDataService
  ) {}

  ngOnInit(): void {
    this.checkForSearchText();
    this.getQuestionId();
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

  onClickBackToQuestions() {
    // this.xxxEventMgrService.handleEvent('routeQuestions');
  }

  private checkForSearchText() {
    // If there is search text then we can navigate back to questions.
    // if (this.store.) {
    //   this.isQuestions = true;
    // }
  }

  private getQuestionId() {
    this.questionId = '';
    this.subscriptionRouteParam = this.route.params.subscribe(params => {
      this.questionId = params['id'];
      if (typeof this.questionId === 'string' && this.questionId.length > 0) {
        this.getQuestion();
      }
    });
  }

  private getQuestion() {
    this.isBusy = true;
    this.isResult = false;
    this.isError = false;
    // this.changeDetectorRef.detectChanges();
    let url = environment.url.api;
    url += 'questions/';
    url += this.questionId;
    url += '?key=' + this.apiKey;
    url += '&filter=withbody';
    url += '&order=desc';
    url += '&sort=activity';
    url += '&site=stackoverflow';
    this.xxxDataService.getData(url).subscribe(
      result => this.onSuccessGetQuestion(result),
      () => this.onErrorGetQuestion()
    );
  }

  private onSuccessGetQuestion(result) {
    if (
      result.hasOwnProperty('items') &&
      typeof result.items === 'object' &&
      result.items.length > 0
    ) {
      this.question = result.items[0];
      this.getAnswers();
    } else {
      this.isBusy = false;
      this.changeDetectorRef.detectChanges();
      const warningMsg = 'Given Question Id Not Found';
      this.xxxAlertService.openAlert(XxxAlertType.WARN, warningMsg);
    }
  }

  // Errors are handled by global interceptor.
  private onErrorGetQuestion() {
    this.isBusy = false;
    this.isError = true;
    this.changeDetectorRef.detectChanges();
  }

  private getAnswers() {
    this.isBusy = true;
    this.isResult = false;
    this.isError = false;
    this.answers = [];
    this.changeDetectorRef.detectChanges();
    let url = environment.url.api;
    url += 'questions/';
    url += this.questionId;
    url += '/answers';
    url += '?key=' + this.apiKey;
    url += '&site=stackoverflow';
    url += '&order=desc';
    url += '&sort=votes';
    url += '&filter=withbody';
    this.xxxDataService.getData(url).subscribe(
      result => this.onSuccessGetAnswers(result),
      () => this.onErrorGetAnswers()
    );
  }

  private onSuccessGetAnswers(result) {
    this.isBusy = false;
    if (
      result.hasOwnProperty('items') &&
      typeof result.items === 'object' &&
      result.items.length > 0
    ) {
      this.answers = result.items;
      this.isResult = true;
    } else {
      const warningMsg = 'No Answers Found For Given Question Id';
      this.xxxAlertService.openAlert(XxxAlertType.WARN, warningMsg);
    }
    this.changeDetectorRef.detectChanges();
  }

  // Errors are handled by global interceptor.
  private onErrorGetAnswers() {
    this.isBusy = false;
    this.isError = true;
    this.changeDetectorRef.detectChanges();
  }
}
