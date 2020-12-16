import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BannerService } from './services/banner.service';
import { ConsultantService } from './services/consultant.service';
import { AppState } from './store/app.state';
import { UpdateBanners } from './store/banners/actions';
import { UpdateConsultants } from './store/consultants/actions';
import { Consultant, Banner } from './store/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private consultantService: ConsultantService,
    private bannerService: BannerService,
    private store: Store<AppState>,
  ) {}

  public ngOnInit(): void {
    this.consultantService.getConsultants().subscribe((consultants: Consultant[]) => {
      this.store.dispatch(UpdateConsultants(consultants));
    });

    this.bannerService.getBanners().subscribe((banners: Banner[]) => {
      this.store.dispatch(UpdateBanners(banners));
    });
  }
}
