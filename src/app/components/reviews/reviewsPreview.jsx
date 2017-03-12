import React from 'react';
import { Link } from 'react-router';
import athletes from '../../data/athletes';

export default class ReviewsPreview extends React.Component {
  render() {
    const id = this.props.params.id;
    const athlete = athletes.filter((athlete) => athlete.id === id)[0];
    if (!athlete) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/src/static/img/${athlete.cover})` };
    return (
      <div className="athlete-full">
       
        <div className="athlete">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/src/static/img/${athlete.image}`}/>
            <h2 className="name">{athlete.name}</h2>
            <div>{athlete.birth}</div>
            <div>{athlete.country}</div>
            <a href={athlete.link} target="_blank">{athlete.link}</a>
          </div>
         
        
        </div>
        <div className="navigateBack">
          <Link to="/reviews">« Back to the reviews</Link>
        </div>
      </div>
    );
  }
}