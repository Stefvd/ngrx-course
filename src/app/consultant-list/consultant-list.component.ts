import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from '../store/app.state';
import { getConsultants } from '../store/consultants/selectors';
import { Consultant } from '../store/models';

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.scss']
})
export class ConsultantListComponent implements OnInit, OnDestroy {
  public consultants$: Observable<Consultant[]>;

  private destroy$ = new Subject<boolean>();

  constructor(
    private store: Store<AppState>,
    ) { }

  public ngOnInit(): void {
    this.consultants$ = this.store.select(getConsultants).pipe(takeUntil(this.destroy$));
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
