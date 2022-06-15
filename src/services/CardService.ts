import axios from "axios";
import { CardModel } from "../model/Card";
import { Deck } from "../model/Deck";

export async function GetNewDeck(): Promise<Deck> {
    const request = await axios.get<Deck>('https://deckofcardsapi.com/api/deck/new/shuffle/');
    return request.data;
}

export async function GetRandomCard(deckId: string): Promise<CardModel> {
    const request = await axios.get<CardModel>(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
    return request.data;
}