import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {DataList} from './containers/DataList/DataList';
import {HistoryList} from './containers/HistoryList/HistoryList';
import {Now} from './components/Now/Now';
import {MoonSun} from './components/MoonSun/MoonSun';
import {Menu} from './components/Menu/Menu';
import { TemperatureTable } from './containers/TemperatureTable/TemperatureTable';
import { WindTable } from './containers/WindTable/WindTable';

class App extends Component {
    render() {
    return (
      <div className="App">
        <div className="content">
          <Menu />
          <Now />
          <DataList />
          <HistoryList />
          <MoonSun />
        </div>
        <div className="tables">
          <TemperatureTable />
          <WindTable />
        </div>
      </div>
    );
  }
}

export default App;
