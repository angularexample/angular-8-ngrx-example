import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '@env/environment';
import * as fromXxxQuestionsPage from '@app/modules/xxx-questions-page/xxx-questions-page.reducer';
import * as fromXxxSearchBox from '@app/modules/xxx-search-box/xxx-search-box.reducer';

export interface State {
  router: fromRouter.RouterReducerState;
  [fromXxxQuestionsPage.xxxQuestionsPageFeatureKey]: fromXxxQuestionsPage.State;
  [fromXxxSearchBox.xxxSearchBoxFeatureKey]: fromXxxSearchBox.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  [fromXxxQuestionsPage.xxxQuestionsPageFeatureKey]:
    fromXxxQuestionsPage.reducer,
  [fromXxxSearchBox.xxxSearchBoxFeatureKey]: fromXxxSearchBox.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
