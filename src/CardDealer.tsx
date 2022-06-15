import React from 'react';
import Card from './Card';
import './CardDealer.css';
import { GetNewDeck, GetRandomCard } from './services/CardService';
import { CardDealerState } from './state/CardDealerState';

class CardDealer extends React.Component<any, CardDealerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      cards: [],
      deckId: '',
      remaining: -1
    }
    this.getRandomCard = this.getRandomCard.bind(this);
  }

  async componentDidMount() {
    const newDeck = await GetNewDeck();
    this.setState({
      deckId: newDeck.deck_id,
      remaining: newDeck.remaining
    })
  }

  async getRandomCard() {
    const newCard = await GetRandomCard(this.state.deckId);
    if(newCard.remaining === 0) {
      this.setState({
        remaining: 0
      });
      return;
    }
    this.setState(cst => {
      newCard.rotation = Math.floor(Math.random() * 180) + 1;
      newCard.moveHorizontal = Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);
      newCard.moveVertical = Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);
      return {
        cards: [...cst.cards, newCard],
        remaining: newCard.remaining
      }
    });
  }

  render() {
    return <div className='CardDealer'>
        <h1>♦ CARD DEALER ♦</h1>
        <h4>♦ A LITTLE DEMO MADE WITH REACT ♦</h4>
        {
          this.state.remaining === 0 
            ? <h5>NO CARDS LEFT</h5>
            : <button onClick={this.getRandomCard}>DEAL ME A CARD</button>  
        }
        {this.state.cards.map((c, i) => 
          <Card 
            key={c.cards[0].code}
            rotation={c.rotation!} 
            zIndex={i}
            imgUrl={c.cards[0].image}
            moveHorizontal={c.moveHorizontal}
            moveVertical={c.moveVertical} />)}
    </div>;
  }
}

export default CardDealer;
