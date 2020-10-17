import React, { Component } from 'react';

import PageHeader from './page_header';
import GuildsTable from './guilds_table';
import {globalState} from '../state';

class DashboardGuildsList extends Component {
  constructor() {
    super();
    this.state = {guilds: null};
  }

  UNSAFE_componentWillMount() {
    globalState.getCurrentUser().then((user) => {
      user.getGuilds().then((guilds) => {
        this.setState({guilds});
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Guilds
        </div>
        <div className="card-body">
          <GuildsTable guilds={this.state.guilds}/>
        </div>
      </div>
    );
  }
}

class Dashboard extends Component {
  render() {
		return (
      <div>
        <PageHeader name="Dashboard" />
        <div className="row">
          <div className="col-lg-12">
            <DashboardGuildsList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
