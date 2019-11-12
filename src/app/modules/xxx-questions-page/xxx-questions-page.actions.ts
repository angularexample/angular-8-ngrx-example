import { Action } from '@ngrx/store';

export enum XxxQuestionsPageActionTypes {
  LoadXxxQuestionsPages = '[XxxQuestionsPage] Load XxxQuestionsPages'
}

export class LoadXxxQuestionsPages implements Action {
  readonly type = XxxQuestionsPageActionTypes.LoadXxxQuestionsPages;
}

export type XxxQuestionsPageActions = LoadXxxQuestionsPages;
