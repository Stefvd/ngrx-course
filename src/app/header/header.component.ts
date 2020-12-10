import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from '../store/app.state';
import { getCartItems } from '../store/consultants/selectors';
import { Consultant } from '../store/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public cart = [];
  private destroy$ = new Subject<boolean>();

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store
      .select(getCartItems)
      .pipe(takeUntil(this.destroy$))
      .subscribe((cartItems: Consultant[]) => {
        this.cart = cartItems;
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
