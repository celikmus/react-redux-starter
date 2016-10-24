import React, {Component} from 'react';
import './Dashboard.scss';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {initialised: true};
  }

  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

Dashboard.propTypes = {

};


export default Dashboard;
