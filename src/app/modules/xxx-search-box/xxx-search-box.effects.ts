import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import * as fromSearchBox from '@app/modules/xxx-search-box/xxx-search-box.reducer';
import { environment } from '@env/environment';

@Injectable()
export class XxxSearchBoxEffects {
  constructor(private actions$: Actions, private router: Router) {}
  // on search text change navigate to questions page
  setSearchText$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[XxxSearchBox] setSearchText'),
        tap<fromSearchBox.State>(payload => {
          const url = [environment.url.questions];
          const queryParams = {
            title: payload.searchText
          };
          return this.router.navigate(url, { queryParams: queryParams });
        })
      ),
    { dispatch: false }
  );
}
