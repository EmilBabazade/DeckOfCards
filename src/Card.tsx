import React from 'react';
import { CardProps } from './props/CardProps';

class Card extends React.Component<CardProps> {
  render() {
    const {rotation, zIndex, imgUrl, moveHorizontal, moveVertical} = this.props;
    const style: React.CSSProperties = {
        top: '300px',
        transform: `rotate(${rotation}deg) translate(${moveHorizontal}px, ${moveVertical}px)`,
        zIndex: zIndex,
        position: 'absolute'
    };
    return <img style={style} src={imgUrl} alt='card' />;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Card;
