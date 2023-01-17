import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"

const cards = data.map(elem => {
    return (<Card key={elem.title} data={elem} />)
})

export default function App() {
    return (
        <div>
            <Nav />
            {cards}
        </div>

    )
}