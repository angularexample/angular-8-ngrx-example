import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '@env/environment';
import * as fromSearchBox from '@app/modules/xxx-search-box/xxx-search-box.reducer';
import * as fromXxxQuestionsPage from '@app/modules/xxx-questions-page/xxx-questions-page.reducer';

export interface State {
  router: fromRouter.RouterReducerState;
  searchBox: fromSearchBox.State;
  [fromXxxQuestionsPage.xxxQuestionsPageFeatureKey]: fromXxxQuestionsPage.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  searchBox: fromSearchBox.reducer

  [fromXxxQuestionsPage.xxxQuestionsPageFeatureKey]: fromXxxQuestionsPage.reducer,};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
