import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button';

const HeroButton = (props) => {

  return (
    <header className="text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>

    {props.button}
  </header>
  )
}

Button.PropTypes = {
 title: PropTypes.string,
  description: PropTypes.string,
  button: React.node,
};

export default HeroButton