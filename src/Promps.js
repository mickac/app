import React from "react"

import jokesData from "./jokesData"
import Joke from "./components/Joke"

function Promps(){
    const jokeComponents = jokesData.map(joke => 
        <Joke 
            key = {joke.id}
            id = {joke.id} 
            question = {joke.question} 
            punchLine = {joke.punchLine} 
        />
    )

    return(
        <div>
            {jokeComponents}
        </div>

        /*<div className="jokes">
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