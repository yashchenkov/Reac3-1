import Star from './Star';
import React from 'react';

export default function Stars(props) {
  const { count } = props;
  if(isNaN(count) || count < 1 || count > 5) {
  	return (
  	<ul className="card-body-stars u-clearfix">
  	</ul>
  	);
  }
  const stars = [];
  for(let i = 0; i < count; i++) {
  	const tag = <Star />
  	stars.push(tag);
  }
  return (
  	<ul className="card-body-stars u-clearfix">
  	  {stars}
  	</ul>
  	);
}