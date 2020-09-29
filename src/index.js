import React from "react"
import ReactDOM from "react-dom"

function MyApp(){
  return (
  <ui>
    <li>jeden</li>
    <li>dwa</li>
    <li>trzy</li>
  </ui>
  )
}

function MyInfo(){
  return(
    <div>
      <h1>Michał Kaczyński</h1>
      <p>React first steps</p>
      <h2>Vacation spots:</h2>
      <ul>
        <li>United States - Florida</li>
        <li>Japan - Tokyo</li>
        <li>Spain - Canarian Isles</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />, 
  document.getElementById("root")
)