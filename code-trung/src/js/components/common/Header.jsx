import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  Button,
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };

    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchMe();
  }

  onLoading(value) {
    this.setState({
      isLoading: value,
    });
  }

  onSuccess() {
    this.onLoading(false);
  }

  onError(err) {
    try {
      const { status } = err.response;
      switch (status) {
        case 404:
          break;

        case 401:
          break;

        default: break;
      }
    } catch (e) {
      // Do something
    } finally {
      this.onLoading(false);
    }
  }

  fetchMe() {
    this.onLoading(true);
    this.props.fetchMe(this.onSuccess, this.onError);
  }

  handleClick() {
    this.props.history.push('/login');
  }

  render() {
    const { isLoading } = this.state;
    const { me } = this.props;
    if (isLoading) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <div>
        <Navbar color="light" light expand="md">
          <h1>HomePage</h1>
          <Nav className="ml-auto" navbar>
            {
              (me.full_name)
                ? <h1>{me.full_name}</h1>
                : <Button onClick={this.handleClick}>Sign In</Button>
            }
          </Nav>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
  me: PropTypes.object.isRequired,
  fetchMe: PropTypes.func.isRequired,
};

export default Header;
