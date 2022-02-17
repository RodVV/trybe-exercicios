import React from 'react';

export default class Pokemon extends React.Component {
    render() {
      console.log(this.props);
      const { nomeDoPokemon, tipo, peso, img } = this.props;
      return(
        <section>
          <h1>{nomeDoPokemon}</h1>
          <p>{tipo}</p>
          <p>{peso}</p>
          <img src={img} alt={nomeDoPokemon}></img>        
        </section>
  
      )
    }
  }

