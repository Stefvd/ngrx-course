import { BannersState } from './banners/state';
import { ConsultantsState } from './consultants/state';

export interface AppState {
    consultantsState: ConsultantsState;
    bannersState: BannersState;
}
