import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromSearchBox from '@app/modules/xxx-search-box/xxx-search-box.reducer';
import { environment } from '@env/environment';

export interface State {
  searchBox: fromSearchBox.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  searchBox: fromSearchBox.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
