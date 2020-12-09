import { ConsultantsState, initialConsultantsState } from './consultants/state';

export interface AppState {
    consultantsState: ConsultantsState;
}

export const initialAppState: AppState = {
    consultantsState: initialConsultantsState,
}

export function getInitialState(): AppState {
    return initialAppState;
}
