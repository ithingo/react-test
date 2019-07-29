import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions/planets';
import '../../scss/main.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    const { isFetching, data } = this.props.planets;

    if (isFetching) { return <p>Loading...</p> };

    return (
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Planets from Star Wars world</h1>
        <ul className="planets">
          { data.map(item => (
            <li className="item" key={ item.name }>
              <p><strong>Name: </strong>{ item.name }</p>
              <p><strong>Orbital period: </strong>{ item.orbital_period }</p>
              <p><strong>Climate: </strong>{ item.climate }</p>
              <p><strong>Diameter: </strong>{ item.diameter }</p>
              <p><strong>Surface water: </strong>{ item.surface_water + (item.surface_water !== 'unknown' ? '%' : '') }</p>
              <p><strong>Terrain: </strong>{ item.terrain }</p>
              <hr />
            </li>
          )) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ planets }) => ({ planets });

export default connect(mapStateToProps, { fetchPlanets })(App);