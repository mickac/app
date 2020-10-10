import React from "react"

class AppState extends React.Component{
/*
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <ChildComponent answer={this.state.answer} />
            </div>
        )
    }
}
*/
/* practice
    constructor() {
        super()
        this.state = {
            name: "name name",
            age: 21
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old.</h3>
            </div>
        )
    }
}
*/
// practice part 2
    constructor() {
        super()
        this.state = {
            //isLoggedIn: true
            isLoggedIn: false
        }
    }

    render() {
        let login
        if(this.state.isLoggedIn){
            login = "in"
        } else {
            login = "out"
        }
        return (
            <div>
                <h1>You are currently logged {login}</h1>
            </div>
        )
    }
}
export default AppState