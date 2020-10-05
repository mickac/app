import React from "react"

import Joke from "./components/Joke"

function Promps(){
    return(
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
        </div>
    )
}

export default Promps