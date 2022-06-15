import React from 'react';

interface CardProps {
    zIndex: number;
}

class Card extends React.Component<CardProps> {
  render() {
    const rotation = Math.floor(Math.random() * 180) + 1;
    const style: React.CSSProperties = {
        top: '300px',
        transform: `rotate(${rotation}deg)`,
        zIndex: this.props.zIndex,
        position: 'absolute'
    };
    return <img style={style} src='https://deckofcardsapi.com/static/img/QD.png' alt='card' />;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Card;
