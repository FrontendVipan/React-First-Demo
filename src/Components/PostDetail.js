import React, {Component} from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:8900/courses"

class Postdetail extends Component {

    constructor(){
        super()
            this.state={
                details: ''
            }
    }

    componentDidMount(){
        this.getDetails();
    }
    
    getDetails(){
        fetch(`${url}/${this.props.match.params.id}`, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                details:data
            })
      });
      } 
    

    render(){
        return (
            <>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card mt-3">
                    <div className="card-body">
                    <img src={this.state.details.img} className="card-img-top" alt="..."></img>
                      <h5 className="card-title">{this.state.details.name}</h5>
                      <p className="card-text">
                      {this.state.details.dec}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default Postdetail;
