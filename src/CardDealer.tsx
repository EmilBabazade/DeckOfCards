import React from 'react';
import Card from './Card';
import './CardDealer.css';

class CardDealer extends React.Component {
  render() {
    return <div className='CardDealer'>
        <h1>♦ CARD DEALER ♦</h1>
        <h4>♦ A LITTLE DEMO MADE WITH REACT ♦</h4>
        <button>DEAL ME A CARD</button>
        <Card zIndex={1} />
        <Card zIndex={2} />
        <Card zIndex={3} />
        <Card zIndex={4} />
    </div>;
  }
}

export default CardDealer;
