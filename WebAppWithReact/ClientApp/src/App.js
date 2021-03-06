import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Employees } from './components/Employees';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Employees} />
        <Route exact path='/home' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/employees' component={Employees} />
        <Route path='/addemployee' component={AddEmployee} />
        <Route path='/editemployee' component={EditEmployee} />
      </Layout>
    );
  }
}
