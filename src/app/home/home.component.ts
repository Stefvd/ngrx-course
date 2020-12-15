import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BannerService } from '../services/banner.service';
import { ConsultantService } from '../services/consultant.service';
import { AppState } from '../store/app.state';
import { getBanners } from '../store/banners/selectors';
import { Banner } from '../store/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public banners$: Observable<Banner[]>;

  private destroy$ = new Subject<boolean>();

  constructor(
    private consultantService: ConsultantService,
    private bannerService: BannerService,
    private store: Store<AppState>,
  ) {}

  public ngOnInit(): void {
    this.bannerService.updateBanners();
    this.consultantService.updateConsultants();

    this.banners$ = this.store.select(getBanners).pipe(takeUntil(this.destroy$));
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
