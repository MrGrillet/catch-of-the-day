import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. Take a copy of the exsiting state
    const fishes = {...this.state.fishes};

    // 2. Add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;

    // 3.Update the state
    this.setState({
      fishes
    });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  };

  addToOrder = key => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Add to order or update a number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update the order
    this.setState({order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />))
            }
          </ul>
        </div>

        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;
