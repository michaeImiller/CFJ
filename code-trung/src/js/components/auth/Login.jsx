import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { validateEmail, validatePassword } from '../../helpers/validator';

function renderError(error) {
  if (!error) {
    return '';
  }
  return (
    <div className="text-danger">
      {error}
    </div>
  );
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      email: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
    };

    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  onLoading(isLoading) {
    this.setState({ isLoading });
  }

  onSuccess() {
    this.onLoading(false);
    this.props.history.push('/');
  }

  onError(err) {
    try {
      const { status } = err.response;
      switch (status) {
        case 404:
          break;

        case 401:
          this.setState({ isError: true });
          break;

        default:
          break;
      }
    } catch (e) {
      // Do something
    } finally {
      this.onLoading(false);
    }
  }

  onEmailChange(event) {
    const value = event.target.value.trim();
    this.setState({ email: { value } });
  }

  onPasswordChange(event) {
    const value = event.target.value.trim();
    this.setState({ password: { value } });
  }

  validateEmail() {
    const { value } = this.state.email;
    const error = validateEmail(value);
    this.setState({
      email: {
        value,
        error,
      },
    });
  }

  validatePassword() {
    const { value } = this.state.password;
    const error = validatePassword(value);
    this.setState({
      password: {
        value,
        error,
      },
    });
  }

  handleBlur(type) {
    if (type === 'email') {
      this.validateEmail();
    } else {
      this.validatePassword();
    }
  }

  handleLogin(event) {
    event.preventDefault();
    const { email, password } = this.state;

    if (
      email.value
      && !email.error
      && password.value
      && !password.error
    ) {
      this.onLoading(true);
      this.props.login(
        email,
        password,
        this.onSuccess,
        this.onError,
      );
    } else {
      this.validateEmail();
      this.validatePassword();
    }
  }

  renderErrorAuth() {
    if (this.state.isError) {
      return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <div className="text-danger alert-danger">
            Email or password is incorrect
          </div>
        </Col>
      );
    }
    return '';
  }

  renderEmail() {
    const { email } = this.state;
    return (
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(event) => this.onEmailChange(event)}
            onBlur={() => this.handleBlur('email')}
            autoFocus
          />
          {renderError(email.error)}
        </FormGroup>
      </Col>
    );
  }

  renderPassword() {
    const { password } = this.state;
    return (
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="Password"
            placeholder="********"
            onChange={(event) => this.onPasswordChange(event)}
            onBlur={() => this.handleBlur('password')}
          />
          {renderError(password.error)}
        </FormGroup>
      </Col>
    );
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <Container>
        <h1> LOGIN </h1>
        <Form onSubmit={(event) => this.handleLogin(event)}>
          <Row>
            {this.renderErrorAuth()}
            {this.renderEmail()}
            {this.renderPassword()}
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Button color="success">Login</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;
