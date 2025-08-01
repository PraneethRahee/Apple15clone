import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Model from "./components/Model.jsx";
import Features from "./components/Features.jsx";
import Todolist from "./components/Todolist.jsx";

const App = () => {
    return (
        <main >
            <Navbar />
            <Hero />
            <Highlights />
            <Model/>
            <Features/>
            {/*<Todolist></Todolist>*/}
        </main>
    )
}
export default App
