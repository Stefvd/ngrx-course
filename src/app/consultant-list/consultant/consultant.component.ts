import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { AddToCart, RemoveFromCart } from 'src/app/store/consultants/actions';
import { Consultant } from 'src/app/store/models';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.scss'],
})
export class ConsultantComponent {
  @Input() public consultant: Consultant;
  public inCart = false;

  constructor(
    private store: Store<AppState>,
    ) {}


  public addToCart(consultant: Consultant): void {
    this.store.dispatch(AddToCart(consultant));
    this.inCart = true;
  }

  public removeFromCart(consultant: Consultant): void {
    this.store.dispatch(RemoveFromCart(consultant));
    this.inCart = false;
  }
}
