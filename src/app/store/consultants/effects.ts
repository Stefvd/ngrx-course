import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ConsultantService } from 'src/app/services/consultant.service';
import { ConsultantsActions } from './actions';

@Injectable()
export class ConsultantsEffects {

  fetchConsultants$ = createEffect(() => this.actions$.pipe(
    ofType(ConsultantsActions.FetchConsultants),
    mergeMap(() => this.consultantService.getConsultants()
      .pipe(
        map(consultants => ({ type: ConsultantsActions.UpdateConsultants, payload: consultants })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private consultantService: ConsultantService,
  ) {}
}