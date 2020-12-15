import { Banner } from '../models';

export interface BannersState {
  banners: Banner[];
}
export const initialBannersState: BannersState = {
  banners: [],
};
