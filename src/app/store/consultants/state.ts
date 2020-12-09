import { Consultant } from '../models';

export interface ConsultantsState {
  consultants: Consultant[];
  cart: Consultant[];
}
export const initialConsultantsState: ConsultantsState = {
  consultants: [],
  cart: [],
};
