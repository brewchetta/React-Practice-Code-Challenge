import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
const PORT = 3000
const API = `http://localhost:${PORT}/sushis`
const fetchSushis = () => fetch(API).then(res => res.json())

class App extends Component {

  state = {
    sushis: [],
    money: 100
  }

  componentDidMount = () => fetchSushis().then(sushis => this.setState({sushis}))

  eatSushi = sushi => {
    if (sushi.price <= this.state.money) {
      const sushis = [...this.state.sushis]
      sushis.splice(sushi.id - 1, 1, {...sushi, eaten: true})
      this.setState({sushis, money: this.state.money - sushi.price})
    } else {
      alert(`${sushi.name} is out of your price range!`)
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi} />
        <Table plates={this.state.sushis.filter(s => s.eaten)} money={this.state.money} />
      </div>
    );
  }
}

export default App;
