import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { ConsultantsReducers } from './consultants/reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
    consultantsState: ConsultantsReducers,
}