export interface Images {
    svg: string;
    png: string;
}

export interface Card {
    code: string;
    image: string;
    images: Images;
    value: string;
    suit: string;
}

export interface CardModel {
    success: boolean;
    deck_id: string;
    cards: Card[];
    remaining: number;
    rotation: number;
    moveHorizontal: number;
    moveVertical: number;
}