import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { UpdateConsultants } from '../store/consultants/actions';
import { Consultant } from '../store/models';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppState>,
  ) { }

  public updateConsultants(): void {
    this.httpClient.get('http://localhost:4000/consultants').subscribe((consultants: Consultant[]) => {
      this.store.dispatch(UpdateConsultants(consultants));
    });
  }
}
