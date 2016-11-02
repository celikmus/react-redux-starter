import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {actions} from './dashboard.reducer';
import './Dashboard.scss';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {initialised: true};
  }
  componentDidMount() {
    this.props.getAuthors().then(() => {
      this.props.getPosts();
    });
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
  getPosts: PropTypes.func.isRequired,
  getAuthors: PropTypes.func.isRequired
};

export default connect(null, actions)(Dashboard);
