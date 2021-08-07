import React from "react";
import { Link } from "react-router-dom";

const PostView = (props) => {
  const renderTopics = ({ topicdata }) => {
    if (topicdata != " ") {
      return topicdata.map((item) => {
        return (
          <div className="col-md-4" key={item.id}>
            <div className="card mt-3">
              <div className="card-body">
                <img src={item.img} className="card-img-top" alt="img"></img>
                <h5 className="card-title mt-2">{item.name}</h5>
                <p className="card-text">
                 {item.dec}
                </p>
                <Link to={`/post/${item.id}`} className="btn btn-info">
                  View
                </Link>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="row"> {renderTopics(props)} </div>
    </div>
  );
};

export default PostView;
