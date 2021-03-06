import { RoundState } from './Rounds/RoundState';
import { PresenterState } from './PresenterState';

export type GameState = {
    roundState: RoundState,
    presenters: PresenterState[],
    questionDuration: number,
};
