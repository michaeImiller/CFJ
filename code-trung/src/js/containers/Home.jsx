import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as authActions from '../actions/auth';
import * as homeActions from '../actions/home';
import Header from '../components/common/Header';
import Tasks from '../components/home/Tasks';

class Home extends PureComponent {
  render() {
    const { data, actions, history } = this.props;
    return (
      <div>
        <Header
          history={history}
          fetchMe={actions.me.fetchMe}
          me={data.me}
        />
        <Tasks fetchTasks={actions.tasks.fetchTasks} tasks={data.tasks} />
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.objectOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    data: {
      me: state.me,
      tasks: state.tasks,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      me: bindActionCreators(authActions, dispatch),
      tasks: bindActionCreators(homeActions, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
