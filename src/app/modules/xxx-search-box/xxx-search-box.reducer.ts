import { Action, createReducer, on } from '@ngrx/store';
import * as SearchBoxActions from './xxx-search-box.actions';

export const xxxSearchBoxFeatureKey = 'xxxSearchBox';

export interface State {
  isSearchButtonDisabled: boolean;
  previousSearchText: string;
  searchText: string | null;
}

export const initialState: State = {
  isSearchButtonDisabled: true,
  previousSearchText: '',
  searchText: null
};

const searchBoxReducer = createReducer(
  initialState,
  on(SearchBoxActions.setIsSearchButtonDisabled, (state, data) => ({
    ...state,
    isSearchButtonDisabled: data.isSearchButtonDisabled
  })),
  on(SearchBoxActions.setPreviousSearchText, (state, data) => ({
    ...state,
    previousSearchText: data.previousSearchText
  })),
  on(SearchBoxActions.setSearchText, (state, data) => ({
    ...state,
    searchText: data.searchText
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return searchBoxReducer(state, action);
}
