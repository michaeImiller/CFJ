import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function getTitleTaskByStatus(status) {
  switch (status) {
    case 2: {
      return 'TO DO';
    }
    case 3: {
      return 'DOING';
    }
    default: {
      return 'OPEN';
    }
  }
}

function renderTasks(tasks, status) {
  const titleTask = getTitleTaskByStatus(status);
  const tasksByTitle = tasks && tasks.filter((item) => item.status === status);
  return (
    <Col xs="3">
      <ListGroup>
        <ListGroupItem color="success">
          {titleTask}
        </ListGroupItem>
        {tasksByTitle.map((task) => (
          <ListGroupItem color="info" key={task.id}>
            {task.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Col>
  );
}

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: 'false',
    };

    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  componentDidMount() {
    this.fetchTasks();
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

  fetchTasks() {
    this.onLoading(true);
    this.props.fetchTasks(this.onSuccess, this.onError);
  }

  render() {
    const { tasks } = this.props;
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
        <Row>
          {
            renderTasks(tasks, 1)
          }
          {
            renderTasks(tasks, 2)
          }
          {
            renderTasks(tasks, 3)
          }
        </Row>
      </Container>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  fetchTasks: PropTypes.func.isRequired,
};

export default Tasks;
