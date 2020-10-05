import React from "react"

function Joke(props){
    var question = props.question
    var punchLine = props.punchLine
    if(!question){
        question = "Now you see me..."
        punchLine = "... Now you don't."
    }

    return(
        <div className="joke">
            <h2>{props.id}.Question:</h2>
            <p>{question}</p>
            <h2>Punchline:</h2>
            <p>{punchLine}</p>
        </div>
    )
}

export default Joke