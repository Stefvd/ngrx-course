import { BannersActions } from './actions';
import { initialBannersState } from './state';

export function BannersReducers(state = initialBannersState, action) {
  switch (action.type) {
    case BannersActions.UpdateBanners:
      return {
        ...state,
        banners: [...action.payload],
      };
    default:
      return state;
  }
}
