import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Contact from "./Contact";
import Home from "./Home";
import Profile from "./Profile";
import Post from "./Post";
import PostDetail from "./PostDetail";
import ToDo  from "./ToDo";
import Products from "./Products";
import ProductsDetails from "./ProductsDetails";

class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/post">Post</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/todo">To Do List</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/products">Products</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/post" component={Post}></Route>
          <Route exact path="/post/:id" component={PostDetail}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/todo" component={ToDo}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/product/:posts" component={ProductsDetails}></Route>
        </>
      </BrowserRouter>
    );
  }
}

export default Routing;
