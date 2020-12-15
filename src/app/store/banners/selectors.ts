import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { BannersState } from './state';

const selectBannersState = (state: AppState) => state.bannersState;

export const getBanners = createSelector(
    selectBannersState,
    (state: BannersState) => state.banners
);
