export enum BannersActions {
  UpdateBanners = '[Banners] Update banners',
}

export const UpdateBanners = (payload) => ({
  type: BannersActions.UpdateBanners,
  payload,
});
