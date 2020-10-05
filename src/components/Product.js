import React from "react"

function Product(props){
    return(
        <div className="product">
            <p>Name of the product: {props.name}</p>
            <p>Price of the product: {props.price}$</p>
            <p>Description: </p>
            <p>{props.description}</p>
            <p>----------------------------------------------------</p>
        </div>
    )
}

export default Product