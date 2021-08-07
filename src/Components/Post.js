import React, {Component} from "react";
import { Link } from "react-router-dom";
import PostView from './PostView';

const url = "http://localhost:8900/courses"

class Post extends React.Component {

    constructor(){
        super()

        this.state={
            topics:[]
        }

    }

    componentDidMount(){
     this.getTopics();
    }

    getTopics(){
      fetch(url, {
          method: 'GET',
      })
      .then((res) => res.json())
      .then((data) => {
          this.setState({
              topics:data
              
          })
    });
    } 

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
                <PostView topicdata={this.state.topics}></PostView>
          </div>
        </div>
      </>
    );
  }
}

export default Post;
