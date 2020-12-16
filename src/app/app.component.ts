import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConsultantService } from './services/consultant.service';
import { AppState } from './store/app.state';
import { UpdateConsultants } from './store/consultants/actions';
import { Consultant } from './store/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private consultantService: ConsultantService,
    private store: Store<AppState>,
  ) {}

  public ngOnInit(): void {
    this.consultantService.getConsultants().subscribe((consultants: Consultant[]) => {
      this.store.dispatch(UpdateConsultants(consultants));
    });
  }
}
