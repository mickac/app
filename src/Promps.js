import React from "react"

//import jokesData from "./data/jokesData"
//import Joke from "./components/Joke"
import vschoolProducts from "./data/vschoolProducts"
import Product from "./components/Product"

function Promps(){
    /*
    const jokeComponents = jokesData.map(joke => 
        <Joke 
            key = {joke.id}
            id = {joke.id} 
            question = {joke.question} 
            punchLine = {joke.punchLine} 
        />
    )
    */
    const productComponents = vschoolProducts.map(product =>
        <Product 
        key = {product.id}
        name = {product.name}
        price = {product.price}
        description = {product.description}
        />
    )



    return(
        <div className="products">
            {productComponents}
        </div>

        /*<div>
            {jokeComponents}
        </div>

        <div className="jokes">
            <Joke
                content = {{question: "You moron", punchLine: ":)"}}
            />
            <Joke
                content = {{question: "", punchLine: ""}}
            />
            <Joke
                content = {{question: "", punchLine: ""}}
            />
            <Joke
                content = {{question: "Test2", punchLine: "EZ Clap"}}
            />
            <Joke
                content = {{question: "", punchLine: ""}}
            />
        </div>*/
    )
}

export default Promps