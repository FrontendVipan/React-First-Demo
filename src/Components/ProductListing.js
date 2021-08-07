import React from 'react';
                 //custom css file imported

const ProductList = (prodlist) => {         //functional component that accepts the products data passed to it

                                            //custom method, called from the view in the Render()  below
    const renderList = ({prodlist}) => {    //temp argument that receives the data passed to this component by Products Component
         
        if(prodlist){                       //if data exists
            return prodlist.map((data) => { //map() function iteratively executes once for each record in the json data
                return(
                    <div key={data.id} class="card col-md-3">
                        <div class="row">
                            <div class="card-img">
                            <img class="card-img-top" src={data.img} alt={data.name}/>
                            </div>
                            <hr/>
                            <span class="topTemp">{data.name}</span>
                            </div>
                            <div class="card-body">
                            <span class="max">Rs. {data.price}</span>  
                                <h4 class="card-title">{data.type}</h4>
                                <div class="card-text">
                                    <p class="day">Rs. {data.price}</p>
                                </div>
                        </div>
                    </div>
                )  
            })
        }  
    }
    return(
        <div className="container">
            <div  className="row">
                {renderList(prodlist)}  {/* Calls the above custom function to render the data in the view */}
            </div>
        </div>
    )
}

export default ProductList;

