import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import CreateGame from "./components/create-game/CreateGame"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameDetails from "./components/details/GameDetails"

import {Routes,Route} from "react-router-dom"
import { useState } from "react"


function App() {
    const [auth, setAuth] = useState({});

    const loginSubmitHanlder = (values) => {
        console.log(values);
    }
    return (
        <div id="box">
            <Header/>
            <Routes>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/catalog" element={<Catalog/>}/>
                <Route path ="/games/create" element={<CreateGame/>}/>
                <Route path ="/login" element={<Login loginSubmitHanlder={loginSubmitHanlder}/>}/>
                <Route path ="/register" element={<Register/>}/>
                <Route path ="/game/:gameId/details" element={<GameDetails/>}/>
            </Routes>
            
        </div>
    )
}

export default App
