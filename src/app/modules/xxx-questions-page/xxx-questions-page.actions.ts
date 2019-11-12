import { createAction, props } from '@ngrx/store';

export const setIsQuestions = createAction(
  '[XxxQuestionsPage] setIsQuestions',
  props<{ isQuestions: boolean }>()
);
