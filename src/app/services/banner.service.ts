import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { UpdateBanners } from '../store/banners/actions';
import { Banner } from '../store/models';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(
    private httpClient: HttpClient,
    private store: Store<AppState>) {}

  public updateBanners(): void {
    this.httpClient
      .get('http://localhost:4000/banners')
      .subscribe((banners: Banner[]) => {
        this.store.dispatch(UpdateBanners(banners));
      });
  }
}
