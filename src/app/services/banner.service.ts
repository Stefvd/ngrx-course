import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(
    private httpClient: HttpClient,
    ) {}

  public getBanners() {
    return this.httpClient.get('http://localhost:4000/banners');
  }
}
