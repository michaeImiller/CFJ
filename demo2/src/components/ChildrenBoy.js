import React, { Component } from "react";
import data from "./data";
import LazyLoad from "react-lazyload";

const Post = ({ id, title, body }) => (
  <div className="post">
    <div className="post-body">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </div>
);

const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
);

class ChildrenBoy extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>LazyLoad Demo</h2>
        <div className="post-container">
          {data.map((post, key) => (
            <LazyLoad key={post.id} placeholder={<Loading />}>
              <Post key={post.id} {...post} />{" "}
            </LazyLoad>
          ))}
        </div>
      </div>
    );
  }
}
export default ChildrenBoy;
