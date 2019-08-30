import { createAction, props } from '@ngrx/store';

export const setIsSearchButtonDisabled = createAction(
    '[XxxSearchBox] setIsSearchButtonDisabled',
    props<{ isSearchButtonDisabled: boolean }>()
);

export const setPreviousSearchText = createAction(
    '[XxxSearchBox] setPreviousSearchText',
    props<{ previousSearchText: string }>()
);

export const setSearchText = createAction(
    '[XxxSearchBox] setSearchText',
    props<{ searchText: string }>()
);
