import React from "react"

function HandleClick() {
    console.log("Click click!")
}

function AppEvents() {
    return(
        <div>
            <img onMouseOver={() => console.log("Hover hover!")} src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
            <br />
            <button onClick={HandleClick}>Click me!</button>
        </div>
    )

}

export default AppEvents