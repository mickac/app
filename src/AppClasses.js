import React from "react"
/*
function AppClasses(){
    return(
        <div>
            <p>test</p>
        </div>
    )
}

class AppClasses extends React.Component{
    render(){
        return(
            <div>
                <p>test</p>
            </div>
        )
    }
}
*/

//practice

class AppClasses extends React.Component{
    render(){
        return(
            <div>
                <Header username="user"/>
                <Greetings />
            </div>
        )
    }

}

class Greetings extends React.Component{
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if(hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return(
            <h1>Good {timeOfDay}!</h1>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <header>
                <p>Welcome, {this.props.username}</p>
            </header>
        )
    }
}

export default AppClasses