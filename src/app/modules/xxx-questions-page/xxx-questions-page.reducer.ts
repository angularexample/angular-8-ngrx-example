import { Action, createReducer, on } from '@ngrx/store';
import * as QuestionsPageActions from './xxx-questions-page.actions';

export const xxxQuestionsPageFeatureKey = 'xxxQuestionsPage';

export interface State {
  isQuestions: boolean;
}

export const initialState: State = {
  isQuestions: false
};

const questionsPageReducer = createReducer(
  initialState,
  on(QuestionsPageActions.setIsQuestions, (state, data) => ({
    ...state,
    isQuestions: data.isQuestions
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return questionsPageReducer(state, action);
}
