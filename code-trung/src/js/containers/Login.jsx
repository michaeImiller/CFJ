import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as authActions from '../actions/auth';
import LoginComponent from '../components/auth/Login';

class Login extends PureComponent {
  render() {
    const { actions, history } = this.props;
    return (
      <div>
        <LoginComponent history={history} login={actions.auth.login} />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  actions: PropTypes.objectOf(PropTypes.object).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      auth: bindActionCreators(authActions, dispatch),
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Login);
