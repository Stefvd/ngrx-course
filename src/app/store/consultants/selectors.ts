import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ConsultantsState } from './state';

const selectConsultantsState = (state: AppState) => state.consultantsState;

export const getConsultants = createSelector(
    selectConsultantsState,
    (state: ConsultantsState) => state.consultants
);

export const getCartItems = createSelector(
    selectConsultantsState,
    (state: ConsultantsState) => state.cart
);
