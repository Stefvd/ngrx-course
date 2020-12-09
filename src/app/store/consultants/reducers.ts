import { ConsultantsActions } from './actions';
import { Consultant } from '../models';
import { initialConsultantsState } from './state';

export function ConsultantsReducers(state = initialConsultantsState, action) {
  switch (action.type) {
    case ConsultantsActions.UpdateConsultants:
      return {
        ...state,
        consultants: [...action.payload],
      };
    case ConsultantsActions.Add:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ConsultantsActions.Remove:
      return {
        ...state,
        cart: [
          ...state.cart.filter((consultant: Consultant) => consultant.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
}
