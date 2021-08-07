import React, { Component } from "react";
import ProductList from "./ProductListing";
import { Link } from "react-router-dom";

const url = "http://localhost:6700/posts";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      title: "Product Page",
      products: [],
      name:'',
    };
  }

  componentDidMount() {
   fetch(url, {
       method:'GET'})
       .then((response) => response.json())
       .then((data) => {
          
          this.setState({
              products:data,
          })
        // console.table(data)
       })
  }


  render() {
    console.log(this.state.products.name);
    const { products } = this.state
    return (
      <>
        <div className="container">
          <div className="row">
          {/* {products.map(person => {
          return (
            <li key={person.id}>
              {person.name} - {person.age} years old
            </li>
          )
        })} */}
        {/* {products.map(person => {
          return (
                <div className="col-md-3 mt-3 mb-3" key={person.id} >
                <div className="card">
                  <img className="card-img-top" src={person.img} alt={person.name} />
                  <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                    <p className="card-text">
                      {person.description}
                    </p>
                    <Link to={`/product/${person.id}`}>View More</Link>
                  </div>
                </div>
              </div> 
              )
        })} */}



            <h2> {this.state.title}</h2>
            <ProductList prodlist={this.state.products}/> 
          </div>
        </div>
      </>
    );
  }
}

export default Products;
