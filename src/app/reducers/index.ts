import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '@env/environment';
import * as fromXxxSearchBox from '@app/modules/xxx-search-box/xxx-search-box.reducer';

export interface State {
  router: fromRouter.RouterReducerState;
  [fromXxxSearchBox.xxxSearchBoxFeatureKey]: fromXxxSearchBox.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  [fromXxxSearchBox.xxxSearchBoxFeatureKey]: fromXxxSearchBox.reducer
};

// Empty. This was generated. We keep it here for future use.
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

// Global selectors go here
export const getSearchText = (state: State) =>
  state[fromXxxSearchBox.xxxSearchBoxFeatureKey].searchText;
