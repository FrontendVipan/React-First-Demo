import React, { Component } from 'react'

const url = "http://localhost:6700/posts";

class ProductsDetails extends Component {
    constructor(){
        super();

        this.state={
            details:'',
        }
    }

    componentDidMount(){
        // console.log(this.props.match.params.productId)
        fetch(`${url}/${this.props.match.params.productId}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
    }

    render() {
        return (
            <div>
                Product Detail
            </div>
        )
    }
}

export default ProductsDetails;
