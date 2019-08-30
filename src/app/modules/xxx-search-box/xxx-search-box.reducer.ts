import { Action, createReducer, on } from '@ngrx/store';
import * as SearchBoxActions from './xxx-search-box.actions';

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
    on(SearchBoxActions.setIsSearchButtonDisabled, state => ({...state, isSearchButtonDisabled: state.isSearchButtonDisabled})),
    on(SearchBoxActions.setPreviousSearchText, state => ({...state, previousSearchText: state.previousSearchText})),
    on(SearchBoxActions.setSearchText, state => ({...state, searchText: state.searchText})),
);

export function reducer(state: State | undefined, action: Action) {
  return searchBoxReducer(state, action);
}
