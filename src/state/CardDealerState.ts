import { CardModel } from "../model/Card";

export interface CardDealerState {
    deckId: string,
    cards: CardModel[],
    remaining: number
}