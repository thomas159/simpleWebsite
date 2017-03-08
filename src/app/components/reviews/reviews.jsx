import React from 'react';
import ReactDOM from 'react-dom';
import athletes from '../../data/athletes'
import { Link, browserHistory } from 'react-router';

console.log(athletes);

function Reviews() {

 

  const athletesBlock = athletes.map(athlete => 
    <li key={athlete.id}>
      <Link to={`/reviews/${athlete.id}`}>{athlete.name}</Link>
    </li>
  );
  return (
    <div className="container reviews">
      <h1>Reviews</h1>
      {athletesBlock}
    </div>
  )
}

export default Reviews;